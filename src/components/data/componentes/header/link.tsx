import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import theme from "../../../theme/theme";

interface LinkProps {
  to: string;
  text: string;
  contentAfter: string
}

export const MenuLink: FC<LinkProps> = ({ to, text, contentAfter }) => (
  <Box as="a" position={"relative"} fontFamily={theme.fonts.heading} className={`Navbar-pages ${contentAfter}`} href={to}>
    {text}
  </Box>
);
