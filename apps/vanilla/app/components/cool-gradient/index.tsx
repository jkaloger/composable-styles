import clsx from "clsx";
import { Box } from "../box";
import { gradient, position1, position2 } from "./index.css";

export const CoolGradient = () => (
  <>
    <Box className={clsx(gradient, position1)} />
    <Box className={clsx(gradient, position2)} />
  </>
);
