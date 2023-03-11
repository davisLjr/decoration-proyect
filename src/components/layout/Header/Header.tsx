import React from "react";
import { HeaderDesktop } from "./components/Desktop";
import { HeaderMobile } from "./components/Mobile";
import { useMediaQuery } from "@chakra-ui/react";

export const Header = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isDesktop ? <HeaderDesktop/> : <HeaderMobile/>}
    </>
  );
};
