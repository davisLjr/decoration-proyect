import React, { useState, useEffect } from "react";
import { HeaderDesktop } from "./components/Desktop";
import { HeaderMobile } from "./components/Mobile";
import { Box, useMediaQuery } from "@chakra-ui/react";

export const Header = () => {
  // const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(min-width: 768px)");
  //   setIsDesktop(mediaQuery.matches);

  //   const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
  //   mediaQuery.addListener(handler);
  //   return () => mediaQuery.removeListener(handler);
  // }, []);

  return (
    <>
      <Box display={{base:'none', md:'block'}}>
        <HeaderDesktop />
      </Box>
      <Box display={{base:'block', md:'none'}}>
        <HeaderMobile />
      </Box>
    </>
  )
};
