export const breakpoints = {
  sm: 0,
  md: 720,
  lg: 1280,
  xl: 1670,
} as const;

export type Breakpoint = keyof typeof breakpoints;
