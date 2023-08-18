import clsx from "clsx";
import * as React from "react";

import type { ClassValue } from "clsx";
import type { FlexSprinkles } from "~/styles/atoms/sprinkles.css";

import { flexSprinkles } from "~/styles/atoms/sprinkles.css";

type HTMLProperties<T = HTMLElement> = Omit<
  React.AllHTMLAttributes<T>,
  "as" | "className" | "color" | "height" | "width" | "color" | "cursor"
>;

type Props = FlexSprinkles &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
  };

const Flex = React.forwardRef<HTMLElement, Props>(
  ({ as = "div", className, ...props }: Props, ref) => {
    const atomProps: Record<string, unknown> = { display: "flex" };
    const nativeProps: Record<string, unknown> = {};

    /* eslint-disable no-restricted-syntax */
    for (const key in props) {
      if (flexSprinkles.properties.has(key as keyof FlexSprinkles)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = flexSprinkles(atomProps);

    return React.createElement(as, {
      className: clsx(atomicClasses, className),
      ref,
      ...nativeProps,
    });
  }
);

export type FlexProps = Parameters<typeof Flex>[0];

Flex.displayName = "Flex";

export { Flex };
