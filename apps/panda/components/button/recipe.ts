import { cva } from "../../styled-system/css";

export const btn = cva({
  base: {
    display: "flex",
    borderRadius: "2xl",
  },
  variants: {
    visual: {
      solid: { bg: { base: "red.500", _hover: "red.850" }, color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "lg",
  },
});
