export interface MDXFrontmatter {
  title: string;
  description: string;
  canonical: string;
  draft?: boolean;
  ogImage?: string;
}

export interface MDXModule {
  default: React.ComponentType;
  frontmatter: MDXFrontmatter;
}

export interface RouteConfig {
  path: string;
  module: () => Promise<MDXModule>;
}

/**
 * Load all MDX files from the content directory and generate route configurations
 * This uses Vite's import.meta.glob to dynamically import MDX files at build time
 */
function generateMDXRoutes(): RouteConfig[] {
  const mdxFiles = import.meta.glob<MDXModule>('/content/**/*.mdx', { eager: false });

  const routes: RouteConfig[] = [];

  for (const [filePath, moduleLoader] of Object.entries(mdxFiles)) {
    // Convert file path to route path
    // /content/pages/home.mdx -> /
    // /content/pages/about.mdx -> /about
    // /content/services/environment-assessment.mdx -> /services/environment-assessment
    // /content/case-studies/epic-mychart-details.mdx -> /case-studies/epic-mychart/details

    let routePath = filePath
      .replace('/content/', '')
      .replace(/\.mdx$/, '');

    // Handle pages directory (flatten to root)
    if (routePath.startsWith('pages/')) {
      routePath = routePath.replace('pages/', '');

      // Handle home page
      if (routePath === 'home') {
        routePath = '';
      }

      // Handle legal pages
      if (routePath.startsWith('legal-')) {
        routePath = routePath.replace('legal-', 'legal/');
      }
    }

    // Handle resources index
    if (routePath === 'resources/index') {
      routePath = 'resources';
    }

    // Handle detail pages (convert -details to /details)
    if (routePath.includes('-details')) {
      routePath = routePath.replace('-details', '/details');
    }

    // Ensure path starts with /
    const path = routePath === '' ? '/' : `/${routePath}`;

    routes.push({
      path,
      module: moduleLoader as () => Promise<MDXModule>,
    });
  }

  return routes;
}

export const mdxRoutes = generateMDXRoutes();

/**
 * Get route by path
 */
export function getRouteByPath(path: string): RouteConfig | undefined {
  return mdxRoutes.find(route => route.path === path);
}

/**
 * Get all published routes (excludes draft pages)
 */
export async function getPublishedRoutes(): Promise<Array<RouteConfig & { frontmatter: MDXFrontmatter }>> {
  const publishedRoutes = [];

  for (const route of mdxRoutes) {
    try {
      const module = await route.module();
      if (module.frontmatter && !module.frontmatter.draft) {
        publishedRoutes.push({
          ...route,
          frontmatter: module.frontmatter,
        });
      }
    } catch (error) {
      console.error(`Error loading module for route ${route.path}:`, error);
    }
  }

  return publishedRoutes;
}

/**
 * Get all routes with their frontmatter (for build-time operations)
 */
export async function getAllRoutesWithFrontmatter(): Promise<Array<RouteConfig & { frontmatter: MDXFrontmatter }>> {
  const routesWithFrontmatter = [];

  for (const route of mdxRoutes) {
    try {
      const module = await route.module();
      if (module.frontmatter) {
        routesWithFrontmatter.push({
          ...route,
          frontmatter: module.frontmatter,
        });
      }
    } catch (error) {
      console.error(`Error loading module for route ${route.path}:`, error);
    }
  }

  return routesWithFrontmatter;
}
