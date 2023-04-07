import { theme } from "@/resources/theme";
import { Flex, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ListH } from "./List";
import { Logo } from "./Logo";

export const HeaderDesktop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 50) { // Cambia a color rosa después de desplazarse 200 píxeles
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Box height="5rem">
        <Flex sx={flex}  
            bg={scrolled ? "neutro" : "primary"}
            boxShadow={scrolled ? theme.shadows.sm : "none"}
        >
          <Logo />
          <ListH
            optionOne="Home"
            optionTwo="Service"
            optionThree="Decoration"
            optionFour="Product"
          />
        </Flex>
      </Box>
    </header>
  );
};

const flex = {
  justifyContent:"space-between",
  padding:"0.5rem 2rem",
  height:"5rem",
  zIndex:"999",
  transition:"background-color 0.5s ease-in-out",
  position:"fixed",
  w:"100%"
}
