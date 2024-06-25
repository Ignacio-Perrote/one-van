import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import "../../css/mainSection.css";
import InteriorImg2 from "../img/Interior-design-2.jpg";
import InteriorImg3 from "../img/Interior-design-3.jpg";
import InteriorImg4 from "../img/Interior-design-1.jpg";
import { useScrollMainAnimation } from "../utils/motionMain.tools";

const SecondaryHome = () => {
  const {
    ref1,
    ref2,
    springY1,
    springScale1,
    springY2,
    springScale2,
    opacity,
  } = useScrollMainAnimation();
  const text = "HIGH - END \n INTERIORS\n  AND EXTERIORS \n DESIGN";
  const text2 =
    "Our interior design firm draws inspiration from the extraordinary beauty we find worldwide and the natural splendor that grounds and motivates us each day.The serene simplicity of minimalism, the crisp blue skies, and the majestic mountain peaks we encounter provide the foundation for our aesthetic. These elements shape our vision of luxurious living for clients who appreciate a modern, nature-inspired approach. We offer bespoke interior design services that transform spaces into tranquil, elegant retreats, reflecting the harmonious balance of simplicity and natural beauty";

  return (
    <Flex
      as="section"
      w={"100%"}
      height={"100vh"}
      className="main-home-section"
      justifyContent={"center"}
      alignItems={"flex-start"}
      position={"relative"}
    >
      <Flex width={"40%"} height={"auto"} justifyContent={"flex-start"}>
        <VStack width={"100%"} pl={"16rem"} pt={"7rem"} gap={8} alignItems={"flex-start"}>
          <Text
            whiteSpace="pre-line"
            lineHeight={"3.5rem"}
            letterSpacing={-4}
            fontSize={"4rem"}
            width={"100%"}
          >
            {text}
          </Text>
          <Text
            width={"100%"}
            whiteSpace="pre-line"
            lineHeight={""}
            letterSpacing={1}
            fontSize={"1rem"}
          >
            {text2}
          </Text>
        </VStack>
      </Flex>
      <Flex as="div" width={"70%"}>
        <motion.div
          ref={ref1}
          style={{
            y: springY1,
            opacity,
            scale: springScale1,
            backgroundColor: "#1a1a1a13",
            position: "absolute",
            width: "24.9vw",
            height: "auto",
            top: "30vh",
            right: "36.5vw",
            filter: "brightness(82%)",
          }}
          whileHover={{
            filter: "brightness(102%)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        >
          <Image src={InteriorImg2} />
        </motion.div>
        <motion.div
          ref={ref2}
          style={{
            y: springY2,
            opacity,
            scale: springScale2,
            position: "absolute",
            width: "19.2vw",
            height: "auto",
            top: "8.3vh",
            right: "14.8vw",
            filter: "brightness(88%)",
            zIndex: "100",
          }}
          whileHover={{
            filter: "brightness(102%)",
            transition: { duration: 0.3 },
          }}
        >
          <Image src={InteriorImg4} />
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default SecondaryHome;
