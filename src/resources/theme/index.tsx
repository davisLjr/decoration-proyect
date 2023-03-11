import { extendTheme } from "@chakra-ui/react";

// darken  2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#FFBFBF",
  secondary: "#8C7AA9",
  backgroundDark: "#161B33",
  neutro: "#F3EFEC",
  text: "#30343F",
  // secondaryG: {
  //   900: "#1D1E2C",
  //   800: "#282a3e",
  //   700: "#30324a",
  //   600: "#383a56",
  //   500: "#404363",
  //   400: "#494b6f",
  //   300: "#51537b",
  //   200: "#595c88",
  //   100: "#616494",
  // },
  // light: "#FEFFEA",
  // brown: "#DB9065",
  // brownHover: "#C6662F",
};

// export const borders = {
//   base: colors.backgroundDark,
//   hover: colors.secondary,
// };

const shadows = {
  sm: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  darks:
    "rgb(38, 57, 77) 0px 20px 30px -10px",
};

// const Button = {
//   baseStyle: {
//     color: "light",
//     borderRadius: "0.313rem",
//     textTransform: "uppercase",
//     paddingTop: "0.156rem",
//     boxShadow: "sm",
//     fontFamily: "Raleway, sans-serif",
//   },
//   sizes: {
//     sm: {
//       lineHeight: "2.5rem",
//       fontSize: "0.625",
//       fontWeight: "semibold",
//     },
//     md: {
//       height: "2.5rem",
//       maxHeight: "2.5rem",
//       fontSize: "xs",
//     },
//     lg: {
//       height: "3rem",
//       maxHeight: "3rem",
//       fontSize: "xs",
//     },
//     xl: {
//       height: "3rem",
//       maxHeight: "3rem",
//       fontSize: "xs",
//       px: { base: "2.5rem", lg: "4.375rem" },
//     },
//   },
//   variants: {
//     solidPrimary: {
//       color: "light",
//       bg: "brown",
//     },
//     outline: {
//       color: "secondary",
//       bg: "white",
//       boxShadow: "none",
//       border: "0.125rem solid",
//       borderColor: "secondary",
//       _hover: {
//         borderColor: "transparent",
//         color: "white",
//       },
//     },
//     ghost: {
//       color: "light",
//       bg: "transparent",
//       border: "1px solid",
//       borderColor: "light",
//       marginTop: "0.625",
//       borderRadius: "0px",
//       _hover: {
//         borderColor: "transparent",
//       },
//     },
//   },
// };

// const Link = {
//   baseStyle: {
//     letterSpacing: "0px",
//     textDecoration: "none",
//     _hover: {
//       textDecoration: "none",
//     },
//   },
// };

const fonts = {
  heading: "Raleway, sans-serif",
  body: "Raleway, sans-serif",
  link: "Raleway, sans-serif",
  text: "Aboreto, cursive",
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    h1: {
      color: "text",
    },
  },
};
const fontSizes = {
  "2xs": "0.625",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.75rem",
  "3xl": "2.125rem",
  "4xl": "2.25rem",
};

export const theme = extendTheme({
  colors,
  shadows,
  // borders,
  styles,
  fonts,
  fontSizes,
  components: {
    // Button,
    // Link,
  },
});
