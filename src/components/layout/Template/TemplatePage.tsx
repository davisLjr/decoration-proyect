import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

interface ComponentProps {
  children: ReactNode;
}
export const PageTemplate = ({ children }: ComponentProps) => {
  return (
    <>
        <Header/>
            <Box as='main'>
                {children}
            </Box>
        <Footer/>
    </>
  );
};
