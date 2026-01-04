interface BreadcrumbItem {
  label: string;
  href?: string; // undefined for current page (last item)
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {isLast ? (
                // Current page - not clickable
                <span
                  aria-current="page"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {item.label}
                </span>
              ) : (
                <>
                  {/* Clickable link */}
                  <a
                    href={item.href}
                    className="transition-colors focus:outline-none focus:underline"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--foreground)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {item.label}
                  </a>
                  {/* Divider */}
                  <span
                    aria-hidden="true"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
