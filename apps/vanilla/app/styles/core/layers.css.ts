import { globalLayer } from "@vanilla-extract/css";

export const reset = globalLayer("reset");
export const framework = globalLayer("framework");
export const component = globalLayer({ parent: framework }, "component");
