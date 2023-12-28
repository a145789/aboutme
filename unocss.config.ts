import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  toEscapedSelector as e,
} from "unocss"
import presetWind from "@unocss/preset-wind"
import { presetScrollbar } from "unocss-preset-scrollbar"
import { RIGHT_SLIDER_WIDTH } from "./libs/constants"

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
  rules: [
    [
      /^c-border-ripple-(.+)$/,
      ([, name], { rawSelector, variantHandlers }) => {
        // if you want, you can disable the variants for this rule
        if (variantHandlers.length) {
          return
        }
        const selector = e(rawSelector)
        // return a string instead of an object
        return `
        ${selector} {
         position: relative;
        }
        ${selector}::before {
          height: ${name};
          width: ${name};
          animation: rippleDot 2s 2s ease-out infinite;
          content: " ";
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          transform: translate(-50%, -50%);
          z-index: -1;
          background-color: #B19C6D;
        }

        @keyframes rippleDot {
          0% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 1;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }
        `
      },
    ],
    [
      /^text-underline-show$/,
      (_, { rawSelector }) => {
        const selector = e(rawSelector)
        return `
      ${selector} {
        position: relative;
        text-decoration: none;
       }
       ${selector}::before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: #1b1b1b;
        transition: width 0.8s;
       }
      `
      },
    ],
    [
      /^text-underline-show-w-(.+)$/,
      ([, name], { rawSelector, variantHandlers }) => {
        if (variantHandlers.length) {
          return
        }
        const selector = e(rawSelector)
        return `
       ${selector}::before {
        width: ${name};
       }
      `
      },
    ],
  ],
  safelist: [`w-${RIGHT_SLIDER_WIDTH}px`],
})
