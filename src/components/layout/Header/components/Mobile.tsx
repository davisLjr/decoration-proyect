import { theme } from "@/resources/theme";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { ListHM } from "./ListMobile";
import { Logo } from "./Logo";

export const HeaderMobile = () => {
  return (
    <header>
      <Flex 
        justifyContent='space-between' 
        padding='0.5rem 2rem' 
        height='5rem' 
        boxShadow={theme.shadows.sm} 
        alignItems='center' 
        position='fixed' 
        w='100%' 
        top='0' 
        background='white' 
        zIndex='99'>
        <Logo/>
        <ListHM  
          optionOne="Home"
          optionTwo="Service"
          optionThree="Decoration"
          optionFour="Product"/>
      </Flex>
    </header>
  );
};
