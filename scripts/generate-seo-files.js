import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://defaultrouteadvisory.com';
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const DIST_DIR = path.join(__dirname, '..', 'dist');

/**
 * Recursively find all MDX files in a directory
 */
function findMDXFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMDXFiles(filePath, fileList);
    } else if (file.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Parse MDX file and extract frontmatter
 */
function parseMDXFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(content);
  return data;
}

/**
 * Convert file path to URL path
 */
function filePathToURL(filePath) {
  let urlPath = filePath
    .replace(CONTENT_DIR, '')
    .replace(/\\/g, '/')
    .replace(/\.mdx$/, '');

  // Handle pages directory (flatten to root)
  if (urlPath.startsWith('/pages/')) {
    urlPath = urlPath.replace('/pages/', '/');

    // Handle home page
    if (urlPath === '/home') {
      urlPath = '/';
    }

    // Handle legal pages
    if (urlPath.startsWith('/legal-')) {
      urlPath = urlPath.replace('/legal-', '/legal/');
    }
  }

  // Handle resources index
  if (urlPath === '/resources/index') {
    urlPath = '/resources';
  }

  // Handle detail pages
  if (urlPath.includes('-details')) {
    urlPath = urlPath.replace('-details', '/details');
  }

  return urlPath === '/home' ? '/' : urlPath;
}

/**
 * Generate sitemap.xml
 */
async function generateSitemap() {
  console.log('Generating sitemap.xml...');

  const mdxFiles = findMDXFiles(CONTENT_DIR);
  const links = [];

  for (const filePath of mdxFiles) {
    const frontmatter = parseMDXFile(filePath);

    // Skip draft pages
    if (frontmatter.draft === true) {
      console.log(`  Skipping draft: ${filePath}`);
      continue;
    }

    const urlPath = filePathToURL(filePath);
    const lastmod = new Date().toISOString();

    // Determine priority based on page type
    let priority = 0.7;
    if (urlPath === '/') priority = 1.0;
    else if (urlPath.startsWith('/services/')) priority = 0.9;
    else if (urlPath.startsWith('/case-studies/')) priority = 0.8;

    links.push({
      url: urlPath,
      lastmod,
      priority,
      changefreq: urlPath === '/' ? 'weekly' : 'monthly',
    });

    console.log(`  Added: ${urlPath}`);
  }

  // Create sitemap stream
  const stream = new SitemapStream({ hostname: SITE_URL });

  // Generate sitemap
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream));

  // Write sitemap to dist
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap.toString());

  console.log(`✓ Sitemap generated with ${links.length} URLs\n`);
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  console.log('Generating robots.txt...');

  const robotsTxt = `# Default Route Advisory - Robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl-delay for good behavior
Crawl-delay: 1
`;

  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt);

  console.log('✓ robots.txt generated\n');
}

/**
 * Generate llms.txt
 */
function generateLLMsTxt() {
  console.log('Generating llms.txt...');

  const mdxFiles = findMDXFiles(CONTENT_DIR);
  const publishedPages = [];

  for (const filePath of mdxFiles) {
    const frontmatter = parseMDXFile(filePath);

    // Skip draft pages
    if (frontmatter.draft === true) {
      continue;
    }

    const urlPath = filePathToURL(filePath);
    const fullURL = `${SITE_URL}${urlPath}`;

    publishedPages.push({
      url: fullURL,
      title: frontmatter.title,
      description: frontmatter.description,
    });
  }

  // Sort by URL
  publishedPages.sort((a, b) => a.url.localeCompare(b.url));

  // Generate llms.txt content
  let llmsTxt = `# Default Route Advisory - LLM Context File
# This file provides a structured list of all published content for LLM consumption
# Site: ${SITE_URL}
# Generated: ${new Date().toISOString()}

## Published Content

`;

  publishedPages.forEach((page) => {
    llmsTxt += `### ${page.title}\n`;
    llmsTxt += `URL: ${page.url}\n`;
    llmsTxt += `Description: ${page.description}\n\n`;
  });

  llmsTxt += `## About Default Route Advisory

Default Route Advisory is an Azure and hybrid network architecture consultancy specializing in regulated organizations. We provide expert services in:

- Azure Environment Assessments
- Design-Only Architecture
- Design-Build Delivery
- Advisory Retainers

Founded by Azure Solutions Architect Dave Cox, we bring 20+ years of enterprise architecture experience to help organizations establish compliant, scalable Azure foundations.

## Contact

Email: hello@defaultrouteadvisory.com
LinkedIn: https://www.linkedin.com/company/default-route-advisory
`;

  fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), llmsTxt);

  console.log(`✓ llms.txt generated with ${publishedPages.length} pages\n`);
}

/**
 * Main execution
 */
async function main() {
  console.log('=== Generating SEO Files ===\n');

  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist directory does not exist. Run `npm run build` first.');
    process.exit(1);
  }

  try {
    await generateSitemap();
    generateRobotsTxt();
    generateLLMsTxt();

    console.log('=== SEO Files Generated Successfully ===');
  } catch (error) {
    console.error('Error generating SEO files:', error);
    process.exit(1);
  }
}

main();
