import { extendTheme } from "@chakra-ui/react";
import '@fontsource/open-sans';

export const theme = extendTheme({
  colors: {
    darkBrown: "#352208ff",
    creme: "#e1bb80ff",
    olive: "#7b6b43ff",
    brown: "#685634ff",
    darkTan: "#806443ff",
    bone: "#E3DBC9",
    highlight: "#00C9A7",
    warning: "#FFC75F",
    danger: "#C34A36",
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans'
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bg: "bone",
      },
    }),
  },
});
