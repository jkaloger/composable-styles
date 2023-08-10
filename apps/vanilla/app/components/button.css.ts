import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../styles/atoms/sprinkles.css";

export const button = recipe({
  base: {
    borderRadius: 6,
  },

  variants: {
    color: {
      neutral: sprinkles({ backgroundColor: "neutral" }),
      brand: { background: "blueviolet" },
      accent: { background: "slateblue" },
    },
    size: {
      small: sprinkles({ padding: 2 }),
      medium: sprinkles({ padding: 4 }),
      large: sprinkles({ padding: 6 }),
    },
    rounded: {
      true: sprinkles({ radius: "oval" }),
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: "neutral",
        size: "large",
      },
      style: {
        background: "ghostwhite",
      },
    },
  ],

  defaultVariants: {
    color: "neutral",
    size: "medium",
  },
});
