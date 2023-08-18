import { recipe } from "@vanilla-extract/recipes";

import type { RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles } from "~/styles/atoms/sprinkles.css";

export const heading = recipe({
  base: {
    display: "block",
  },
  variants: {
    size: {
      0: sprinkles({
        fontFamily: "sans",
        fontSize: 2,
        fontWeight: "regular",
        lineHeight: "snug",
      }),
      1: sprinkles({
        fontFamily: "sans",
        fontSize: 6,
        fontWeight: "regular",
        lineHeight: "none",
      }),
      2: [
        sprinkles({
          fontFamily: "serif",
          fontSize: 5,
          fontWeight: "regular",
          lineHeight: "tight",
        }),
      ],
      3: [
        sprinkles({
          fontFamily: "sans",
          fontSize: 4,
          fontWeight: "regular",
          lineHeight: "normal",
        }),
      ],
    },
  },
  defaultVariants: {
    size: 1,
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;
