import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenIndexes = new Set(openIndexes);
    if (newOpenIndexes.has(index)) {
      newOpenIndexes.delete(index);
    } else {
      if (!allowMultiple) {
        newOpenIndexes.clear();
      }
      newOpenIndexes.add(index);
    }
    setOpenIndexes(newOpenIndexes);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <div
            key={index}
            className="glass rounded-xl border overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-200 motion-focus"
              style={{
                background: isOpen ? "var(--background-surface)" : "transparent",
              }}
              aria-expanded={isOpen}
            >
              <h5 style={{ color: "var(--foreground)" }}>{item.question}</h5>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                style={{ color: "var(--text-secondary)" }}
              />
            </button>

            {/* Answer Content */}
            {isOpen && (
              <div
                className="px-6 pb-5 pt-2"
                style={{ background: "var(--background-surface)" }}
              >
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
