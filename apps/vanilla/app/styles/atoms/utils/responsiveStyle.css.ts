import { breakpoints } from "../../core/breakpoints.css";

import type { Breakpoint, MediaQuery, Result } from "./types";

// Allows you to pass in an object with keys that match the breakpoints defined in the breakpoints.css file.
// The values of the object are the styles that will be applied at that breakpoint.
// Accepts an optional Type parameter that allows you to specify the shape of the styles object.
export const responsiveStyle = <T>(
  styles: Partial<Record<Breakpoint, T>>
): Result<T> => ({
  "@media": Object.entries<T>(styles).reduce<Record<MediaQuery, T>>(
    (acc, [key, value]) => {
      acc[`screen and (min-width: ${breakpoints[key as Breakpoint]}px)`] =
        value;

      return acc;
    },
    {} as Record<MediaQuery, T>
  ),
});
