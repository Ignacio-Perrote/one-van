import {
  Flex,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import "../../css/hero.css";
import theme from "../theme/theme";

const Hero = () => {
  const HeroTitleFirst = "NUESTRA \n COLECCION";
  const HeroTitleSecond = "DE DISEÑOS";
  const HeroBody =
    "Creada para inspirar y elevar espacios con elegancia \n  minimalista";
  return (
    <Flex
      as="section"
      w={"100%"}
      h={"100vh"}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment={"fixed"}
      className="hero-image"
      justifyContent={"center"}
    >
      <VStack
        width={"91.2%"}
        height={"35%"}
        margin={"auto"}
        pl={2}
        alignItems={"flex-start"}
      >
        <Text
          zIndex={1}
          as="h1"
          fontSize={56}
          lineHeight={"2.8rem"}
          letterSpacing={-4}
          color={"white"}
          whiteSpace="pre-line"
        >
          {HeroTitleFirst}
        </Text>
        <Text
          zIndex={1}
          as="h1"
          fontSize={56}
          lineHeight={"3.2rem"}
          fontStyle={"italic"}
          letterSpacing={-4}
          color={"white"}
          whiteSpace="pre-line"
        >
          {HeroTitleSecond}
        </Text>
        <Text
          zIndex={10}
          as="h3"
          fontFamily={theme.fonts.heading}
          fontSize={17}
          color={"white"}
          whiteSpace="pre-line"
        >
          {HeroBody}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Hero;
