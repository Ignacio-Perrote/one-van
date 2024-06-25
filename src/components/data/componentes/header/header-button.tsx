import { Flex, Icon, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import { IconType } from "react-icons/lib";

interface HeaderSocialLinksProps {
  to: string;
  icon: IconType
}

export const HeaderSocialLinks: FC<HeaderSocialLinksProps> = ({ to, icon }) => (
  <Flex>
    <Link as="a" href={to} position={"relative"} color={"white"}>
      <Icon as={icon} boxSize={4}></Icon>
    </Link>
  </Flex>
);
