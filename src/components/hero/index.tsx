import { Box, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import HeroDetail from "./component/description";

const Hero = () => {
  return (
    <Box maxW="1400px" p="0px 1.5rem" h="100vh">
      <HeroDetail />
    </Box>
  );
};

export default Hero;
