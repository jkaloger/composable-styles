import { PropsWithChildren } from "react";
import { btn } from "./recipe";

export const Button = ({ children }: PropsWithChildren) => {
  return <div className={btn({ visual: "solid", size: "lg" })}>{children}</div>;
};
