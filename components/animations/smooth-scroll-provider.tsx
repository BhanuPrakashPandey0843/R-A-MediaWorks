"use client";

import { ReactLenis } from "lenis/react";

/**
 * Wraps the app in a global Lenis smooth-scroll instance. `root` mounts it
 * against the document scroller rather than a wrapper div, so ordinary
 * layout and position:fixed elements keep behaving normally.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
