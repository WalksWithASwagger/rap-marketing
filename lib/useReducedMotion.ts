"use client";

import { useReducedMotion as motionUseReducedMotion } from "motion/react";

/**
 * Wrapper around motion's useReducedMotion that always returns a boolean
 * (motion returns `boolean | null` during SSR). Defaults to `false` so
 * animations remain enabled until the client confirms a preference.
 */
export function useReducedMotion(): boolean {
  return motionUseReducedMotion() ?? false;
}

export default useReducedMotion;
