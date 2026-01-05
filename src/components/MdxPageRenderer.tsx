import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { MDXModule, getRouteByPath } from '@/lib/mdxRoutes';
import { SEOHead } from '@/components/SEOHead';

/**
 * Loading fallback component
 */
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
             role="status"
             aria-label="Loading">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Error fallback component
 */
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Something went wrong
        </h1>
        <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
          {error.message || 'An unexpected error occurred while loading this page.'}
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg"
          style={{
            background: 'var(--primary-azure)',
            color: 'var(--text-primary)'
          }}
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

/**
 * MDX Page Renderer Component
 * Dynamically loads and renders MDX content based on the current route
 */
export function MdxPageRenderer() {
  const location = useLocation();
  const params = useParams();
  const [mdxModule, setMdxModule] = useState<MDXModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Construct the current path from location
  const currentPath = location.pathname;

  useEffect(() => {
    async function loadMdxContent() {
      setLoading(true);
      setError(null);

      try {
        // Find the route configuration for the current path
        const route = getRouteByPath(currentPath);

        if (!route) {
          throw new Error(`No route found for path: ${currentPath}`);
        }

        // Load the MDX module
        const module = await route.module();
        setMdxModule(module);
      } catch (err) {
        console.error('Error loading MDX content:', err);
        setError(err instanceof Error ? err : new Error('Failed to load content'));
      } finally {
        setLoading(false);
      }
    }

    loadMdxContent();
  }, [currentPath]);

  // Show loading state
  if (loading) {
    return <LoadingFallback />;
  }

  // Show error state
  if (error) {
    return <ErrorFallback error={error} />;
  }

  // Redirect if this is a draft page (optional - you may want to show drafts in dev)
  if (mdxModule?.frontmatter?.draft && import.meta.env.PROD) {
    return <Navigate to="/404" replace />;
  }

  // Render the MDX content
  if (mdxModule) {
    const MDXContent = mdxModule.default;
    return (
      <Suspense fallback={<LoadingFallback />}>
        <SEOHead frontmatter={mdxModule.frontmatter} path={currentPath} />
        <div className="mdx-content">
          <MDXContent />
        </div>
      </Suspense>
    );
  }

  return <Navigate to="/404" replace />;
}
