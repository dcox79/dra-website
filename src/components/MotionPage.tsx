import { Info, CheckCircle2 } from "lucide-react";
import { CardHoverDemo, ButtonGlowDemo, ButtonLiftDemo, FadeUpDemo, FocusDemo, AmbientOrbsDemo, ScaleHoverDemo } from "./MotionDemo";

export function MotionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Motion & Interaction Standards</h2>
        <p className="text-lg mb-6" style={{ color: "var(--text-secondary)" }}>
          Motion supports clarity and hierarchy. No gimmicks, no novelty—everything feels intentional and restrained.
        </p>
      </div>

      {/* Motion Philosophy */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Motion Philosophy</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h5 className="mb-2">Intentional</h5>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Every animation serves a purpose—guiding attention, confirming actions, or revealing hierarchy
            </p>
          </div>
          <div>
            <h5 className="mb-2">Restrained</h5>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Subtle and professional. Animations never distract or feel playful in a regulated environment
            </p>
          </div>
          <div>
            <h5 className="mb-2">Accessible</h5>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Respects prefers-reduced-motion and maintains WCAG compliance for focus indicators
            </p>
          </div>
        </div>
      </div>

      {/* Global Motion Rules */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Global Motion Rules</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-teal)" }} />
            <div>
              <h5 className="mb-1">Duration: 300–500ms</h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Fast (300ms) for hovers, normal (400ms) for transitions, slow (500ms) for complex state changes
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-teal)" }} />
            <div>
              <h5 className="mb-1">Easing: ease-out or soft spring only</h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Natural deceleration creates professional feel. Avoid bouncy or elastic easing
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent-teal)" }} />
            <div>
              <h5 className="mb-1">No infinite animations except ambient backgrounds</h5>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Loading spinners and ambient orbs are the only exceptions. Never animate for decoration
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
          <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
            <div>--duration-fast: 300ms;</div>
            <div>--duration-normal: 400ms;</div>
            <div>--duration-slow: 500ms;</div>
            <div>--ease-out: cubic-bezier(0, 0, 0.2, 1);</div>
            <div>--ease-soft-spring: cubic-bezier(0.5, 1.25, 0.75, 1);</div>
          </code>
        </div>
      </div>

      {/* Card Hover */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Card Hover: Slight Elevation</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Cards lift 2–4px on hover with increased shadow to indicate interactivity. Active state compresses slightly.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Live Example</h5>
            <CardHoverDemo />
          </div>
          <div>
            <h5 className="mb-3">Implementation</h5>
            <div className="p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
              <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
                <div>{"<div className=\"motion-card-hover\">"}</div>
                <div>  {"//"} Auto-applies hover lift</div>
                <div>{"</div>"}</div>
                <div></div>
                <div>{"//"} Motion behavior:</div>
                <div>{"//"} • translateY: -2px on hover</div>
                <div>{"//"} • shadow: elevation-hover</div>
                <div>{"//"} • duration: 300ms ease-out</div>
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Button Hover */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Button Hover: Gentle Glow or Brightness Shift</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Buttons respond with subtle glow (primary) or lift (secondary) to confirm interactivity without distraction.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Glow Effect (Primary)</h5>
            <ButtonGlowDemo />
            <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
              <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
                <div>{"<button"}</div>
                <div>  {' className="motion-button-glow"'}</div>
                <div>{">"}</div>
                <div></div>
                <div>{"//"} Adds subtle blue glow</div>
                <div>{"//"} • filter: brightness(1.1)</div>
                <div>{"//"} • box-shadow: glow-subtle</div>
              </code>
            </div>
          </div>
          <div>
            <h5 className="mb-3">Lift Effect (Secondary)</h5>
            <ButtonLiftDemo />
            <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
              <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
                <div>{"<button"}</div>
                <div>  {' className="motion-button-lift"'}</div>
                <div>{">"}</div>
                <div></div>
                <div>{"//"} Lifts with soft spring</div>
                <div>{"//"} • translateY: -1px</div>
                <div>{"//"} • easing: soft-spring</div>
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Section Entry */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Section Entry: Fade-Up</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Content fades in with minimal translateY (20px) for gentle entrance. Delays can be staggered for sequential reveal.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Staggered Animation</h5>
            <FadeUpDemo />
          </div>
          <div>
            <h5 className="mb-3">Implementation</h5>
            <div className="p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
              <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
                <div>{"<div className=\"motion-fade-up\">"}</div>
                <div>  First element</div>
                <div>{"</div>"}</div>
                <div></div>
                <div>{"<div className=\"motion-fade-up"}</div>
                <div>{' motion-fade-up-delay-1">'}</div>
                <div>  Second (+100ms)</div>
                <div>{"</div>"}</div>
                <div></div>
                <div>{"//"} Available delays:</div>
                <div>{"//"} delay-1 (100ms)</div>
                <div>{"//"} delay-2 (200ms)</div>
                <div>{"//"} delay-3 (300ms)</div>
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Focus States */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Focus States: Visible but Understated</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Focus rings are clearly visible (WCAG compliant) with primary color outline and subtle shadow. Fast 150ms transition.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Interactive Example</h5>
            <FocusDemo />
          </div>
          <div>
            <h5 className="mb-3">Implementation</h5>
            <div className="p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
              <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
                <div>{"<input"}</div>
                <div>  {' className="motion-focus"'}</div>
                <div>{"/>"}</div>
                <div></div>
                <div>{"//"} Focus behavior:</div>
                <div>{"//"} • outline: 2px primary</div>
                <div>{"//"} • outline-offset: 2px</div>
                <div>{"//"} • shadow: 0 0 0 4px primary/20%</div>
                <div>{"//"} • duration: 150ms</div>
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Background Motion */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Background Motion: Optional Ambient Orbs</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Very slow movement (8s cycle), barely noticeable. Adds depth without distraction. Must never interfere with content.
        </p>
        <AmbientOrbsDemo />
        <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
          <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
            <div>{"<div className=\"relative\">"}</div>
            <div>  {"<div className=\"ambient-orb ambient-orb-1\""}</div>
            <div>    {' style={{ width: "400px", height: "400px", top: "10%", left: "5%" }} />'}</div>
            <div>  {"<div className=\"ambient-orb ambient-orb-2\""}</div>
            <div>    {' style={{ width: "350px", height: "350px", bottom: "10%", right: "10%" }} />'}</div>
            <div>  {"<div className=\"ambient-orb ambient-orb-3\""}</div>
            <div>    {' style={{ width: "300px", height: "300px", top: "50%", left: "50%" }} />'}</div>
            <div></div>
            <div>  {"//"} Content on top with higher z-index</div>
            <div>  {"<div className=\"relative z-10\">...</div>"}</div>
            <div>{"</div>"}</div>
          </code>
        </div>
      </div>

      {/* Scale Hover */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Scale Hover: Subtle Growth</h3>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
          Interactive elements can scale 2% on hover for tactile feedback. Active state compresses to 98%.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-3">Example</h5>
            <ScaleHoverDemo />
          </div>
          <div>
            <h5 className="mb-3">Usage</h5>
            <div className="p-4 rounded-lg" style={{ background: "var(--code-background)", border: "1px solid var(--code-border)" }}>
              <code className="text-xs block space-y-1" style={{ color: "var(--code-text)" }}>
                <div>{"<div className=\"motion-scale-hover\">"}</div>
                <div>  Interactive element</div>
                <div>{"</div>"}</div>
                <div></div>
                <div>{"//"} Transforms:</div>
                <div>{"//"} • hover: scale(1.02)</div>
                <div>{"//"} • active: scale(0.98)</div>
                <div>{"//"} • duration: 300ms ease-out</div>
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Note */}
      <div
        className="p-6 rounded-lg border-l-4"
        style={{
          background: "var(--info-muted)",
          borderLeftColor: "var(--info)",
        }}
      >
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 mt-0.5" style={{ color: "var(--info)" }} />
          <div>
            <h5 className="mb-2">Reduced Motion Support</h5>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              All motion utilities respect `prefers-reduced-motion: reduce`. Users with vestibular disorders or motion sensitivity will see instant state changes without animation. Focus states remain visible with instant transitions.
            </p>
          </div>
        </div>
      </div>

      {/* Motion Tokens Reference */}
      <div className="glass p-8 rounded-xl">
        <h3 className="mb-6">Motion Tokens Reference</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="mb-4">Durations</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--duration-instant</code>
                <span>150ms</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--duration-fast</code>
                <span>300ms</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--duration-normal</code>
                <span>400ms</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--duration-slow</code>
                <span>500ms</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--duration-ambient</code>
                <span>8000ms</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-4">Distances</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--translate-hover</code>
                <span>-2px</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--translate-active</code>
                <span>-1px</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--translate-entry</code>
                <span>20px</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--scale-hover</code>
                <span>1.02</span>
              </div>
              <div className="flex justify-between">
                <code style={{ color: "var(--text-secondary)" }}>--scale-active</code>
                <span>0.98</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
