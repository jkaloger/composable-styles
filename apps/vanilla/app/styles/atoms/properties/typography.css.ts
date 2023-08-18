import { times } from "lodash/fp";

const ITEREE = 0.5;
const MAX = 50;
const pxBase = 12;

const generateFontSize = (factor: number) =>
  times((n) => ({ [n]: `${n * factor * pxBase}px` }))(MAX / ITEREE).reduce(
    (prev, curr) => ({ ...prev, ...curr }),
    {}
  );

// font sizew
export const fontSizeSm = generateFontSize(0.75);
export const fontSize = generateFontSize(1);
export const fontSizeLg = generateFontSize(1.5);
export const fontSizeXL = generateFontSize(2);

export const fontWeight = {
  thin: "300",
  regular: "400",
  semibold: "600",
  bold: "800",
  black: "1000",
};

export const lineHeight = {
  none: "1.01",
  tight: "1.05",
  snug: "1.1",
  normal: "1.375",
  relaxed: "1.5",
  loose: "2",
} as const;
