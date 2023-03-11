import { Box, Image } from '@chakra-ui/react'
import React from "react";

export const Logo = () => {
  return (
    <Box width='4rem' height='4rem'>
        <Image src='./images/icons/logo.jpg' alt='Dan Abramov' objectFit='cover' borderRadius='50%' />
    </Box>
  );
};
