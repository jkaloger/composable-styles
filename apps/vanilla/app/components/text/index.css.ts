import { recipe } from "@vanilla-extract/recipes";

import type { RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/styles/atoms/sprinkles.css";

export const text = recipe({
  base: {
    display: "inline",
  },
  variants: {
    size: {
      none: sprinkles({}),

      body: sprinkles({
        fontFamily: "sans",
        fontSize: 1,
        fontWeight: "regular",
        lineHeight: "normal",
      }),
      mono: sprinkles({
        fontFamily: "mono",
        fontSize: 0,
        fontWeight: "thin",
        lineHeight: "normal",
      }),
      bodyUnderline: sprinkles({
        fontFamily: "sans",
        fontWeight: "regular",
        textDecoration: "underline",
        lineHeight: "normal",
      }),
      caption: sprinkles({
        fontFamily: "sans",
        fontSize: 1,
        fontWeight: "regular",
        lineHeight: "normal",
      }),
      captionUnderline: sprinkles({
        fontFamily: "mono",
        fontSize: 1,
        fontWeight: "regular",
        lineHeight: "relaxed",
      }),
    },
  },
  defaultVariants: {
    size: "body",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
