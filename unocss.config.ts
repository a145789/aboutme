import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss"
import presetWind from "@unocss/preset-wind"
import { presetScrollbar } from "unocss-preset-scrollbar"

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: "inline-block",
        height: "1.2em",
        width: "1.2em",
        "vertical-align": "text-bottom",
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
    presetUno(),
    presetWind(),
    presetScrollbar(),
  ],
  shortcuts: {
    "scrollbar~":
      "scrollbar scrollbar-rounded scrollbar-w-4px scrollbar-radius-2 scrollbar-track-radius-4 scrollbar-thumb-radius-4 scrollbar-thumb-color-dark",
  },
})
