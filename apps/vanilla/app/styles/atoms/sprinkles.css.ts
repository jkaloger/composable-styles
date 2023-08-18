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

    width: { ...vars.spacingConst, ...vars.breakpoints },
    maxWidth: { ...vars.spacingConst, ...vars.breakpoints, full: "100vw" },

    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
  },
  shorthands: {
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
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
    boxShadow: vars.shadows,
    textDecoration: ["underline"],
  },
  shorthands: {
    radius: ["borderRadius"],
    shadow: ["boxShadow"],
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
  properties: {
    backgroundColor: vars.colors,
    background: vars.colors,
    overflow: ["hidden", "visible", "scroll"],
    fontFamily: ["serif", "sans", "mono"],
    position: ["relative", "absolute", "sticky"],
    backdropFilter: vars.backdropFilter,
  },
  shorthands: {},
});

const flexProperties = defineProperties({
  conditions: generateBreakpoints(breakpoints),
  defaultCondition: "sm",
  properties: {
    display: ["flex", "inline-flex"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    gap: vars.spacingRel,
    alignItems: ["center", "flex-start", "flex-end"],
    justifyContent: ["center", "flex-start", "flex-end"],
  },
  shorthands: {
    direction: ["flexDirection"],
    align: ["alignItems"],
    justify: ["justifyContent"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  animationProperties,
  eventProperties,
  unresponsiveProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

export const flexSprinkles = createSprinkles(
  flexProperties,
  responsiveProperties,
  eventProperties,
  unresponsiveProperties
);

export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];
