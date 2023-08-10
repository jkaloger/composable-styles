import {
  assignVars,
  createTheme,
  createThemeContract,
  style,
} from "@vanilla-extract/css";

import { colors } from "./core/colors.css";
import * as properties from "./atoms/properties/index.css";
import { responsiveStyle } from "./atoms/utils/responsiveStyle.css";

export const vars = createThemeContract({
  ...properties,
  colors,
});

export const defaultTheme = createTheme(vars, {
  ...properties,
  colors,
});

export const responsiveTheme = style(
  responsiveStyle({
    sm: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelSm }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstSm }),
      },
    },
    md: {
      vars: {},
    },
    lg: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelLg }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstLg }),
      },
    },
    xl: {
      vars: {
        ...assignVars(vars.spacingRel, { ...properties.spacingRelXL }),
        ...assignVars(vars.spacingConst, { ...properties.spacingConstXL }),
      },
    },
  })
);
