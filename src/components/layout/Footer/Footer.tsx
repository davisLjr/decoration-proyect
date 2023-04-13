import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <Box
        width="100%"
        p="2rem 1.5rem"
        textAlign="center"
        background="secondary"
        mt="80px"
      >
        <Text color="white">Todos los derechos reservados © 2023</Text>
      </Box>
    </footer>
  );
};
