import { button } from "./button.css";

export const Button = () => (
  <button
    className={button({
      color: "neutral",
      size: "large",
      rounded: true,
    })}
  >
    Hello world
  </button>
);
