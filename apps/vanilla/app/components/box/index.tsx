import clsx from "clsx";
import * as React from "react";

import type { ClassValue } from "clsx";
import type { Sprinkles } from "~/styles/atoms/sprinkles.css";

import { sprinkles } from "~/styles/atoms/sprinkles.css";

type HTMLProperties<T = HTMLElement> = Omit<
  React.AllHTMLAttributes<T>,
  "as" | "className" | "color" | "height" | "width" | "color" | "cursor"
>;

type Props = Sprinkles &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
  };

const Box = React.forwardRef<HTMLElement, Props>(
  ({ as = "div", className, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    /* eslint-disable no-restricted-syntax */
    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = sprinkles(atomProps);

    return React.createElement(as, {
      className: clsx(atomicClasses, className),
      ref,
      ...nativeProps,
    });
  }
);

export type BoxProps = Parameters<typeof Box>[0];

Box.displayName = "Box";

export { Box };
