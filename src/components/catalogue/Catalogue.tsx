import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Piñatas } from "./components/PiñatasList";

export const Catalogue = () => {
  return ( 
    <Box mb='80px'>
      <Box textAlign='center' mb='2rem'>
        <Heading>
          Nuestras Piñatas
        </Heading>
        <Text>Dale un vistazo a nuestras piñatas, todas pueden ser personalizadas y adaptadas a tu evento.</Text>
      </Box>
      <Piñatas/>
    </Box>
  )
}