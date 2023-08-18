import clsx from "clsx";
import * as React from "react";

import type { ClassValue } from "clsx";
import type { GridSprinkles } from "~/styles/atoms/sprinkles.css";

import { gridSprinkles } from "~/styles/atoms/sprinkles.css";

type HTMLProperties<T = HTMLElement> = Omit<
  React.AllHTMLAttributes<T>,
  "as" | "className" | "color" | "height" | "width" | "color" | "cursor"
>;

type Props = GridSprinkles &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
    columns?: number;
  };

const Grid = React.forwardRef<HTMLElement, Props>(
  ({ as = "div", className, columns = 12, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = {
      display: "grid",
    };
    const nativeProps: Record<string, unknown> = {
      "grid-template-columns": `repeat(${columns}, 1fr)`,
    };

    /* eslint-disable no-restricted-syntax */
    for (const key in props) {
      if (gridSprinkles.properties.has(key as keyof GridSprinkles)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = gridSprinkles(atomProps);

    return React.createElement(as, {
      className: clsx(atomicClasses, className),
      ref,
      ...nativeProps,
    });
  }
);

export type GridProps = Parameters<typeof Grid>[0];

Grid.displayName = "Grid";

export { Grid };
