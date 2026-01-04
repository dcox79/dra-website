import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export function CardHoverDemo() {
  return (
    <div className="glass p-6 rounded-xl motion-card-hover border cursor-pointer" style={{ borderColor: "var(--border)" }}>
      <h5 className="mb-2">Interactive Card</h5>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        Hover to see 2px lift with shadow elevation
      </p>
      <div className="mt-4 p-3 rounded-lg" style={{ background: "var(--background-surface)" }}>
        <code className="text-xs" style={{ color: "var(--code-text)" }}>
          .motion-card-hover
        </code>
      </div>
    </div>
  );
}

export function ButtonGlowDemo() {
  return (
    <button
      className="motion-button-glow px-6 py-2.5 rounded-lg"
      style={{
        background: "var(--primary-azure)",
        color: "var(--primary-foreground)",
      }}
    >
      Glow on Hover
    </button>
  );
}

export function ButtonLiftDemo() {
  return (
    <button
      className="motion-button-lift px-6 py-2.5 rounded-lg border"
      style={{
        borderColor: "var(--border)",
        color: "var(--foreground)",
      }}
    >
      Lift on Hover
    </button>
  );
}

export function FadeUpDemo() {
  const [key, setKey] = useState(0);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setKey(k => k + 1)}
        className="px-4 py-2 rounded-lg border flex items-center gap-2"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        <RotateCcw className="w-4 h-4" />
        Replay Animation
      </button>
      
      <div key={key} className="space-y-3">
        <div className="motion-fade-up glass p-4 rounded-lg">
          <h5 className="mb-1">First Element</h5>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Fades up immediately</p>
        </div>
        
        <div className="motion-fade-up motion-fade-up-delay-1 glass p-4 rounded-lg">
          <h5 className="mb-1">Second Element</h5>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>100ms delay</p>
        </div>
        
        <div className="motion-fade-up motion-fade-up-delay-2 glass p-4 rounded-lg">
          <h5 className="mb-1">Third Element</h5>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>200ms delay</p>
        </div>
      </div>
    </div>
  );
}

export function FocusDemo() {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Tab or click to focus"
        className="motion-focus w-full px-4 py-2.5 rounded-lg border"
        style={{
          background: "var(--input-background)",
          borderColor: "var(--border)",
          color: "var(--foreground)",
        }}
      />
      <button
        className="motion-focus px-6 py-2.5 rounded-lg"
        style={{
          background: "var(--primary-azure)",
          color: "var(--primary-foreground)",
        }}
      >
        Tab to Focus Me
      </button>
    </div>
  );
}

export function AmbientOrbsDemo() {
  const [isPlaying, setIsPlaying] = useState(true);

  // Inline keyframes as a style tag
  const keyframes = `
    @keyframes floatOrb1 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(50px, -50px) scale(1.1); }
      66% { transform: translate(-40px, 40px) scale(0.9); }
    }
    @keyframes floatOrb2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(-60px, 40px) scale(1.05); }
      66% { transform: translate(30px, -30px) scale(0.95); }
    }
    @keyframes floatOrb3 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(40px, 50px) scale(1.08); }
      66% { transform: translate(-50px, -40px) scale(0.92); }
    }
  `;

  return (
    <div className="relative">
      <style>{keyframes}</style>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="mb-4 px-4 py-2 rounded-lg border flex items-center gap-2"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        {isPlaying ? "Pause" : "Play"} Animation
      </button>
      
      <div 
        className="relative rounded-xl overflow-hidden border" 
        style={{ 
          background: "var(--background)",
          minHeight: "400px",
          borderColor: "var(--border)"
        }}
      >
        {/* Ambient Orbs */}
        <div 
          style={{ 
            position: "absolute",
            width: "300px", 
            height: "300px", 
            top: "20%", 
            left: "10%",
            background: "oklch(0.45 0.15 250 / 0.5)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "floatOrb1 8s ease-in-out infinite",
            animationPlayState: isPlaying ? "running" : "paused",
            pointerEvents: "none"
          }}
        />
        <div 
          style={{ 
            position: "absolute",
            width: "250px", 
            height: "250px", 
            bottom: "15%", 
            right: "15%",
            background: "oklch(0.50 0.18 200 / 0.45)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "floatOrb2 8s ease-in-out infinite",
            animationPlayState: isPlaying ? "running" : "paused",
            pointerEvents: "none"
          }}
        />
        <div 
          style={{ 
            position: "absolute",
            width: "200px", 
            height: "200px", 
            top: "50%", 
            left: "50%",
            marginLeft: "-100px",
            marginTop: "-100px",
            background: "oklch(0.40 0.12 180 / 0.4)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "floatOrb3 8s ease-in-out infinite",
            animationPlayState: isPlaying ? "running" : "paused",
            pointerEvents: "none"
          }}
        />
        
        {/* Content on top */}
        <div className="relative z-10 glass-strong p-8 rounded-xl m-8">
          <h4 className="mb-2" style={{ color: "var(--foreground)" }}>Ambient Background Motion</h4>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Very slow orb movement (8s cycle), barely noticeable, does not distract from content.
            The blurred colored orbs float gently in the background.
          </p>
          <div className="mt-4 flex gap-3">
            <div className="w-4 h-4 rounded-full" style={{ background: "oklch(0.45 0.15 250)" }} />
            <div className="w-4 h-4 rounded-full" style={{ background: "oklch(0.50 0.18 200)" }} />
            <div className="w-4 h-4 rounded-full" style={{ background: "oklch(0.40 0.12 180)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScaleHoverDemo() {
  return (
    <div className="inline-block motion-scale-hover cursor-pointer glass p-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
      <h5 className="mb-2">Scale on Hover</h5>
      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
        Subtle 2% scale increase
      </p>
    </div>
  );
}