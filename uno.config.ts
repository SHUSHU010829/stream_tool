import { defineConfig } from "unocss";
import { presetAttributify } from "unocss/preset-attributify";
import { presetIcons } from "unocss/preset-icons";
import { presetUno } from "unocss/preset-uno";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(), // <div text="red-500 white" flex />
    presetIcons(), // i-heroicons-home, i-carbon-add 等
  ],
  theme: {
    colors: {
      brand: "#065E86",
    },
  },
});
