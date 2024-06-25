import { ChakraProvider, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import PrimaryHome from "./primary-home-section";
import SecondaryHome from "./secondary-home-section";
const MainHome = () => {
  return (
    <ChakraProvider>
      <VStack gap={0}> 
      <PrimaryHome />
      <SecondaryHome />
      </VStack>
    </ChakraProvider>
  );
};

export default MainHome;