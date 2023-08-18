import {
  assignVars,
  createTheme,
  createThemeContract,
  style,
} from "@vanilla-extract/css";

import { colors } from "./core/colors.css";
import * as properties from "./atoms/properties/index.css";
import { responsiveStyle } from "./atoms/utils/responsiveStyle.css";
import {
  breakpointsPx,
  breakpointsPxMd,
  breakpointsPxSm,
} from "./core/breakpoints.css";

export const vars = createThemeContract({
  ...properties,
  breakpoints: breakpointsPx,
  colors,
});

export const defaultTheme = createTheme(vars, {
  ...properties,
  breakpoints: breakpointsPx,
  colors,
});

export const responsiveTheme = style(
  responsiveStyle({
    sm: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelSm }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstSm }),
        ...assignVars(vars.breakpoints, { ...breakpointsPxSm }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeSm }),
      },
    },
    md: {
      vars: {
        ...assignVars(vars.breakpoints, { ...breakpointsPxMd }),
        ...assignVars(vars.fontSize, { ...properties.fontSize }),
      },
    },
    lg: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelLg }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstLg }),
        ...assignVars(vars.breakpoints, { ...breakpointsPx }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeLg }),
      },
    },
    xl: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelXL }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstXL }),
        ...assignVars(vars.fontSize, { ...properties.fontSizeXL }),
      },
    },
  })
);
