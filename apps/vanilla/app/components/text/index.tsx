import clsx from "clsx";
import * as React from "react";

import { Box } from "../box";

import { text } from "./index.css";

import type { TextVariants } from "./index.css";
import type { BoxProps } from "../box";

export type TextProps = BoxProps & TextVariants;

export const Text = React.forwardRef(
  (
    { size, as = "div", children, className, ...props }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        as={as}
        className={clsx([text({ size }), className])}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";
