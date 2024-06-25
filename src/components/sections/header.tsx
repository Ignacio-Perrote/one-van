import { Box, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { IconType } from "react-icons/lib";
import "../../css/header.css";
import { HeaderSocialLinks } from "../data/componentes/header/header-button";
import { MenuLink } from "../data/componentes/header/link";

interface HeaderPage {
  text: string;
  to: string;
  contentAfter: string;
}

interface SocialLink {
  to: string;
  icon: IconType;
}

interface HeaderProps {
  headerPages: HeaderPage[];
  socialLinks: SocialLink[];
}

const Header: FC<HeaderProps> = ({ headerPages, socialLinks }) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up");
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const scrollupClass =
    scrollDirection === "up" && window.scrollY > 0 ? "scroll-up" : "";

  const headerStyle = {
    top: scrollDirection === "down" ? "-100px" : "0",
    backgroundColor:
      scrollDirection === "down"
        ? "rgba(0, 0, 0, 0.5)"
        : window.scrollY === 0
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(0, 0, 0, 0.95)",
    transition:
      "top 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  return (
    <HStack
      as="header"
      position="fixed"
      width="100%"
      style={headerStyle}
      className={`header ${scrollupClass}`}
      zIndex={20}
      py={"2.5"}
    >
      <Flex width={"91.2%"} margin={"auto"} justifyContent={"space-between"}>
        <Box as="div" pl={2}>
          <Text className="header-title" zIndex={20}>
            Credby
          </Text>
        </Box>
        <HStack spacing={8} as="ul" alignItems={"center"}>
          {headerPages.map((menuLink) => (
            <Box as="li" key={"link -" + menuLink.to} className="Navbar.li">
              <MenuLink
                to={menuLink.to}
                text={menuLink.text}
                contentAfter={menuLink.contentAfter}
              />
            </Box>
          ))}
        </HStack>
        <HStack spacing={12} as="ul" gap="12" alignItems={"center"}>
          {socialLinks.map((link) => (
            <Box as="li" key={"link -" + link.to}>
              <HeaderSocialLinks to={link.to} icon={link.icon} />
            </Box>
          ))}
        </HStack>
      </Flex>
    </HStack>
  );
};

export default Header;
