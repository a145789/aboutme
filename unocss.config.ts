import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss"

export default defineConfig({
  presets: [
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
    presetUno(),
  ],
  shortcuts: {
    btn: "bg-#000 text-#fff text-14px py-10px px-16px font-500 border-solid border-#000 cursor-pointer inline-block rounded-5px",
    "hover:btn": "bg-transparent text-#000",
  },
})
