import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  readTime?: string;
  date?: string;
  href: string;
  variant?: "default" | "featured";
}

export function ArticleCard({
  title,
  description,
  category,
  readTime = "5 min read",
  date,
  href,
  variant = "default",
}: ArticleCardProps) {
  const isFeatured = variant === "featured";

  return (
    <a
      href={href}
      className={`block glass rounded-xl border motion-card-hover group ${
        isFeatured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className={`p-6 ${isFeatured ? "md:p-8" : ""}`}>
        {/* Category Badge */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border"
            style={{
              borderColor: "var(--border)",
              background: "var(--background-elevated)",
              color: "var(--text-secondary)",
            }}
          >
            <Tag className="w-3 h-3" />
            <span>{category}</span>
          </div>

          {/* Meta Information */}
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`mb-3 group-hover:text-[var(--primary-cyan)] transition-colors ${
            isFeatured ? "text-2xl" : ""
          }`}
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`mb-4 ${isFeatured ? "text-base" : "text-sm"}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>

        {/* Read More Link */}
        <div
          className="inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all"
          style={{ color: "var(--primary-azure)" }}
        >
          <span>Read article</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
}
