import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme.css";
import { mapValues } from "lodash/fp";
import { breakpoints } from "../core/breakpoints.css";

const generateBreakpoints = mapValues((breakpoint: number) =>
  breakpoint === 0
    ? {}
    : { "@media": `screen and (min-width: ${breakpoint}px)` }
);

const responsiveProperties = defineProperties({
  conditions: generateBreakpoints(breakpoints),
  defaultCondition: "sm",
  properties: {
    paddingLeft: vars.spacingConst,
    paddingRight: vars.spacingConst,
    paddingTop: vars.spacingConst,
    paddingBottom: vars.spacingConst,

    marginLeft: vars.spacingConst,
    marginRight: vars.spacingConst,
    marginTop: vars.spacingRel,
    marginBottom: vars.spacingRel,
  },
  shorthands: {
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
  },
});

const eventProperties = defineProperties({
  conditions: {
    default: {},
    active: { selector: "&:active:not(:disabled)" },
    hover: { selector: "&:hover:not(:disabled)" },
    focus: { selector: "&:focus" },
    disabled: { selector: "&:disabled" },
  },
  defaultCondition: "default",
  properties: {
    backgroundColor: vars.colors,
    borderRadius: vars.borderRadius,
  },
  shorthands: {
    radius: ["borderRadius"],
  },
});

const animationProperties = defineProperties({
  conditions: {
    default: {},
    reduceMotion: { "@media": "(prefers-reduced-motion: reduce)" },
  },
  defaultCondition: "default",
  properties: {
    transitionDuration: vars.duration,
    animationDuration: vars.duration,
    animationTimingFunction: vars.timing,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {},
  shorthands: {},
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  animationProperties,
  eventProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
