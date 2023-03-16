import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss"
import presetWind from "@unocss/preset-wind"

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
  ],
  shortcuts: {
    btn: "bg-#000 text-#fff text-14px py-6px px-12px font-500 border-1px border-solid border-#000 cursor-pointer inline-block rounded-5px transition-colors duration-500",
    "btn-hover": "bg-transparent text-#000",
    "btn-dark": "text-#000 bg-transparent border-gary-200",
    "btn-dark-hover": "text-#fff bg-#000",
  },
})
