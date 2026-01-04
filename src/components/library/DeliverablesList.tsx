import { LucideIcon } from "lucide-react";

export interface Deliverable {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DeliverablesListProps {
  deliverables: Deliverable[];
  columns?: 1 | 2 | 3;
}

export function DeliverablesList({
  deliverables,
  columns = 2,
}: DeliverablesListProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid md:grid-cols-2",
    3: "grid md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <div className={`${gridClass} gap-6`}>
      {deliverables.map((deliverable, index) => {
        const Icon = deliverable.icon;
        return (
          <div
            key={index}
            className="glass p-6 rounded-xl border"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: "var(--background-surface)" }}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: "var(--primary-azure)" }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h5
                  className="mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {deliverable.title}
                </h5>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {deliverable.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
