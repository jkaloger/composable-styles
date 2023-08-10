import type { breakpoints } from "../../core/breakpoints.css";

export type Breakpoint = keyof typeof breakpoints;

export type MediaQuery =
  `screen and (min-width: ${(typeof breakpoints)[Breakpoint]}px)`;

export type Result<T> = {
  "@media": Record<MediaQuery, T>;
};
