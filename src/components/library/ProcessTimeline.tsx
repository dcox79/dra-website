export interface ProcessPhase {
  number: number;
  title: string;
  description: string;
  duration?: string;
}

export interface ProcessTimelineProps {
  phases: ProcessPhase[];
  orientation?: "horizontal" | "vertical";
}

export function ProcessTimeline({
  phases,
  orientation = "horizontal",
}: ProcessTimelineProps) {
  return (
    <div
      className={`
        ${orientation === "horizontal" ? "hidden lg:grid lg:grid-cols-4 gap-8" : ""}
        ${orientation === "vertical" ? "flex flex-col gap-6" : ""}
      `}
    >
      {phases.map((phase, index) => (
        <div key={phase.number} className="relative">
          {/* Connector Line */}
          {index < phases.length - 1 && orientation === "horizontal" && (
            <div
              className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-8 h-px"
              style={{ background: "var(--border)" }}
            />
          )}
          {index < phases.length - 1 && orientation === "vertical" && (
            <div
              className="absolute top-14 left-6 w-px h-[calc(100%+0.5rem)]"
              style={{ background: "var(--border)" }}
            />
          )}

          {/* Phase Card */}
          <div className="relative">
            {/* Number Badge */}
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 font-semibold"
              style={{
                background: "var(--primary-azure)",
                color: "var(--primary-foreground)",
              }}
            >
              {phase.number}
            </div>

            {/* Content */}
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h5 style={{ color: "var(--foreground)" }}>{phase.title}</h5>
                {phase.duration && (
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {phase.duration}
                  </span>
                )}
              </div>
              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {phase.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Responsive wrapper that switches orientation
export function ResponsiveProcessTimeline({ phases }: { phases: ProcessPhase[] }) {
  return (
    <>
      {/* Desktop - Horizontal */}
      <div className="hidden lg:block">
        <ProcessTimeline phases={phases} orientation="horizontal" />
      </div>
      {/* Mobile/Tablet - Vertical */}
      <div className="block lg:hidden">
        <ProcessTimeline phases={phases} orientation="vertical" />
      </div>
    </>
  );
}
