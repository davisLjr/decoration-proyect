import { Box, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
// import { collection, getDocs } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "utils/firebase";

// interface Hero {
//   id: string;
//   titulo: string;
//   descripcion: string;
//   imagen: string;
//   label: string;
// }

const HeroDetail = () => {
  // const [heroCollection, setHeroCollection] = useState<Hero[]>([]);

  // useEffect(() => {
  //   const fetchHeroCollection = async () => {
  //     const heroCollectionRef = collection(db, "hero");
  //     const heroCollectionSnapshot = await getDocs(heroCollectionRef);
  //     const heroCollectionData = heroCollectionSnapshot.docs.map(
  //       (doc) => ({ id: doc.id, ...doc.data() } as Hero)
  //     );
  //     setHeroCollection(heroCollectionData);
  //     console.log('prueba', heroCollectionData)
  //   };

  //   fetchHeroCollection();
  // }, []);

  return (
    <Box display="flex" className="testtt" h="100%">
      <Box sx={container}>
        <Box>
          <Heading sx={heading}>
            Piñatas personalizadas para cualquier ocasión
          </Heading>
          <Text sx={text}>
            En DecorAle, creamos piñatas únicas y personalizadas para celebrar
            tus momentos especiales.
          </Text>
          <Box>
            <Tag size={{ base: "sm", md: "md" }}>
              Desde cumpleaños hasta bodas, ¡nosotros tenemos la piñata perfecta
              para ti!
            </Tag>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroDetail;

const container = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const heading = {
  as: "h1",
  fontSize: { base: "4xl", md: "5xl" },
  mb: "20px",
  fontWeight: "bold",
  color: "black",
};

const text = {
  fontSize: { base: "md", md: "xl" },
  mb: "10px",
  mt: "-1rem",
};
