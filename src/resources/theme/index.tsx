import { extendTheme } from "@chakra-ui/react";

// darken  2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#FFBFBF",
  secondary: "#8C7AA9",
  backgroundDark: "#161B33",
  neutro: "#F3EFEC",
  text: "#30343F",
};

const shadows = {
  sm: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  darks:
    "rgb(38, 57, 77) 0px 20px 30px -10px",
};

const Link = {
  baseStyle: {
    color: '#8b92a7',
    _visited: {
      color:'#30343F'
    },
    _focus: {
      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
    }
  }
};

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
      color: "#30343F",
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
    Link,
  },
});
