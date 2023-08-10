import { times } from "lodash/fp";

const ITEREE = 0.5;
const MAX = 50;
const pxBase = 16;

// generators
const generateSpacingRel = (factor: number) =>
  times((n) => ({ [n]: `${n * factor}rem` }))(MAX / ITEREE).reduce(
    (prev, curr) => ({ ...prev, ...curr }),
    {}
  );

const generateSpacingConst = (factor: number) =>
  times((n) => ({ [n]: `${n * factor * pxBase}px` }))(MAX / ITEREE).reduce(
    (prev, curr) => ({ ...prev, ...curr }),
    {}
  );

// relative spacing
export const spacingRelSm = generateSpacingRel(0.75);
export const spacingRel = generateSpacingRel(1);
export const spacingRelLg = generateSpacingRel(1.5);
export const spacingRelXL = generateSpacingRel(2);

// constant spacing
export const spacingConstSm = generateSpacingConst(0.75);
export const spacingConst = generateSpacingConst(1);
export const spacingConstLg = generateSpacingConst(1.5);
export const spacingConstXL = generateSpacingConst(2);
