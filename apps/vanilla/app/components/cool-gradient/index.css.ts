import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/atoms/sprinkles.css";

export const gradient = style([
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "256px",
    width: "256px",
    zIndex: -1,
  },
  sprinkles({
    background: "eucalyptusRadial",
  }),
]);

export const position1 = style({
  transform: "translate(12%, -100%)",
});

export const position2 = style({
  transform: "translate(-45%, -104%)",
  height: "512px",
  width: "512px",
});
