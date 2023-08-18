import clsx from "clsx";
import * as React from "react";

import { Box } from "../box";

import { heading } from "./index.css";

import type { HeadingVariants } from "./index.css";
import type { BoxProps } from "../box";

export type HeadingProps = BoxProps & HeadingVariants;

const HeadingElementMap: { [key: string]: BoxProps["as"] } = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
};

export const Heading = React.forwardRef(
  (
    {
      size,
      as = size && size in HeadingElementMap ? HeadingElementMap[size] : "div",
      children,
      className,
      ...props
    }: HeadingProps,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        as={as}
        className={clsx([heading({ size }), className])}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Heading.displayName = "Heading";
