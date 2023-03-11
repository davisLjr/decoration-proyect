import { theme } from "@/resources/theme";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { ListH } from "./List";
import { Logo } from "./Logo";

export const HeaderDesktop = () => {
  return (
    <header>
      <Flex justifyContent='space-between' padding='0.5rem 2rem' height='5rem' boxShadow={theme.shadows.sm}>
        <Logo/>
        <ListH
          optionOne="Home"
          optionTwo="Service"
          optionThree="Decoration"
          optionFour="Product"
        />
      </Flex>
    </header>
  );
};
