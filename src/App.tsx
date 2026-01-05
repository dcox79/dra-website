import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { mdxRoutes } from '@/lib/mdxRoutes';
import { MdxPageRenderer } from '@/components/MdxPageRenderer';

/**
 * 404 Not Found Page
 */
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-6" style={{ color: 'var(--text-secondary)' }}>
          Page Not Found
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--text-tertiary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="dark min-h-screen">
          <Routes>
            {/* Generate routes from MDX files */}
            {mdxRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<MdxPageRenderer />}
              />
            ))}

            {/* 404 Not Found */}
            <Route path="/404" element={<NotFoundPage />} />

            {/* Catch-all redirect to 404 */}
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}
