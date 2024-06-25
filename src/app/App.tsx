import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { headerPages } from "../components/data/arrays/nav-pages";
import { socialLinks } from "../components/data/arrays/social-links";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import theme from "../components/theme/theme";
import "../css/index.css";
import MainHome from "../components/sections/main";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="div"
      >
        <Header socialLinks={socialLinks} headerPages={headerPages} />
        <Hero />
      </Flex>
      <Flex as={"div"}>
      <MainHome/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
