import { LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  onClick,
}: ServiceCardProps) {
  const Component = href ? "a" : "div";
  const props = href ? { href } : {};

  return (
    <Component
      {...props}
      onClick={onClick}
      className="glass p-6 rounded-xl motion-card-hover border group cursor-pointer"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Icon */}
      {Icon && (
        <div className="mb-4">
          <div
            className="inline-flex p-3 rounded-lg"
            style={{
              background: "var(--background-surface)",
            }}
          >
            <Icon
              className="w-6 h-6 transition-colors duration-300"
              style={{ color: "var(--primary-azure)" }}
            />
          </div>
        </div>
      )}

      {/* Title */}
      <h4
        className="mb-3 transition-colors duration-300"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className="text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </Component>
  );
}
