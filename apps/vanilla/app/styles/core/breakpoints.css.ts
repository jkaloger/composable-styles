export const breakpoints = {
  sm: 0,
  md: 720,
  lg: 1280,
  xl: 1670,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointsPx = {
  sm: "720px",
  md: "1280px",
  lg: "1670px",
} as const;

export const breakpointsPxMd = {
  sm: "720px",
  md: "1280px",
  lg: "1280px",
} as const;

export const breakpointsPxSm = {
  sm: "720px",
  md: "720px",
  lg: "720px",
} as const;

export type BreakpointPx = keyof typeof breakpointsPx;
