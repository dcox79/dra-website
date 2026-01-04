import { Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Header } from "./library/Header";
import { Footer } from "./library/Footer";
import { createNavLinks } from "../utils/navigation";
import { useState } from "react";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="dark min-h-screen" style={{ background: "var(--background)" }}>
      <Header
        currentPath="contact"
        navLinks={createNavLinks(onNavigate)}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section
        className="py-20 sm:py-28"
        style={{
          background: `linear-gradient(to bottom, var(--background) 0%, var(--background-elevated) 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="mb-6" style={{ color: "var(--foreground)" }}>
            Let's Discuss Your Azure Project
          </h1>
          <p className="text-xl" style={{ color: "var(--text-secondary)" }}>
            Schedule a 30-minute technical consultation to discuss your compliance requirements,
            architecture challenges, and project timeline.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "var(--foreground)" }}>
                Request a Consultation
              </h2>

              {formState === "success" ? (
                <div
                  className="glass p-8 rounded-xl border text-center"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--success-muted)" }}
                  >
                    <CheckCircle2
                      className="w-8 h-8"
                      style={{ color: "var(--success)" }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                    Thank You!
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    We'll review your request and respond within 24 hours on business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                      style={{
                        background: "var(--input-background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                      style={{
                        background: "var(--input-background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                      style={{
                        background: "var(--input-background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="Acme Corporation"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                      style={{
                        background: "var(--input-background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                    >
                      <option value="">Select a service...</option>
                      <option value="assessment">Azure Environment Assessment</option>
                      <option value="landing-zones">Azure Landing Zones</option>
                      <option value="identity">Identity & Access Management</option>
                      <option value="security">Security & Compliance</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={formState === "submitting"}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                      style={{
                        background: "var(--input-background)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }}
                      placeholder="Brief description of your Azure environment, compliance requirements, and project goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    style={{
                      background: formState === "submitting" ? "var(--muted)" : "var(--primary-azure)",
                      color: "var(--primary-foreground)",
                      cursor: formState === "submitting" ? "wait" : "pointer",
                    }}
                  >
                    {formState === "submitting" ? "Submitting..." : "Request Consultation"}
                  </button>

                  <p className="text-sm text-center" style={{ color: "var(--text-tertiary)" }}>
                    We typically respond within 24 hours on business days
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "var(--foreground)" }}>
                Other Ways to Reach Us
              </h2>

              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--primary-azure)" }}
                  >
                    <Mail className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                      Email
                    </h3>
                    <a
                      href="mailto:info@defaultroute.advisory"
                      className="transition-colors"
                      style={{ color: "var(--primary-cyan)" }}
                    >
                      info@defaultroute.advisory
                    </a>
                    <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                      For general inquiries and detailed project discussions
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--primary-cyan)" }}
                  >
                    <Clock className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                      Response Time
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Within 24 hours on business days
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--text-tertiary)" }}>
                      Monday - Friday, 9am - 5pm ET
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="glass p-6 rounded-xl border"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-teal)" }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                      Service Area
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      US-based clients, remote delivery worldwide
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--text-tertiary)" }}>
                      On-site available for select engagements
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div
                className="glass p-6 rounded-xl border mt-8"
                style={{ borderColor: "var(--border)" }}
              >
                <h3 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Initial response within 24 hours to schedule consultation call
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      30-minute technical discussion to understand your requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Fixed-price proposal with detailed scope and timeline
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent-teal)" }}
                    />
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      No sales pressure - we'll tell you if we're not a good fit
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
