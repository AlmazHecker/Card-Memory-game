// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      active: "#00d0ba",
      "not-active": "#2a3e4a",
      choosed: "#f7f664",
      background: "#00c2be",
    },
    fonts: {
      Roboto: "Roboto",
    },
  },

  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});
