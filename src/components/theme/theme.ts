import { extendTheme } from "@chakra-ui/react";
import '@fontsource/roboto';
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/playfair-display/wght-italic.css';
const theme = extendTheme({
  fonts: {
    heading: "system-ui, sans-serif",
    body: "Playfair Display Variable, sans-serif",
    
  },
});

export default theme;