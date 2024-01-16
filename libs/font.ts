import localFont from "next/font/local"

export const SmileySansFont = localFont({
  src: "../styles/SmileySans-Oblique.ttf.woff2",
})

export const Lato = localFont({
  src: "../styles/lato-regular.ttf",
  variable: "--font-lato",
  display: "swap",
})
