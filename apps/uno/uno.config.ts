// uno.config.ts
import { defineConfig, presetUno } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
});
