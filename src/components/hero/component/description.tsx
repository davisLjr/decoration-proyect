import { Box, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "utils/firebase";

interface Hero {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  label: string;
}

const HeroDetail = () => {
  const [heroCollection, setHeroCollection] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroCollection = async () => {
      const heroCollectionRef = collection(db, "hero");
      const heroCollectionSnapshot = await getDocs(heroCollectionRef);
      const heroCollectionData = heroCollectionSnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Hero)
      );
      setHeroCollection(heroCollectionData);
      console.log('prueba', heroCollectionData)
    };

    fetchHeroCollection();
  }, []);
  
  return (
    <Box display='flex' className='testtt' h='calc(100vh - 80px)'>
      {heroCollection.map((hero) => (
        <Box 
          key={hero.id} 
          sx={container}
        >
            <Box>
              <Heading sx={heading}>
                {hero.titulo}
              </Heading>
              <Text sx={text}>
                {hero.descripcion}
              </Text>
              <Box>
                <Tag 
                  size={{base :'sm', md:'md'}}
                  >
                    {hero.label}
                </Tag>
              </Box>
            </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HeroDetail;

const container = {
  w:'100%',
  h:'100%',
  display:'flex', 
  alignItems:'center',
  padding:{base: '0.125rem', md:'1.5rem'},
  justifyContent:"center",
  textAlign:"center"
}

const heading = {
  as:"h1", 
  fontSize:{base :'4xl', md:'5xl'},
  mb:5,
  fontWeight:"bold",
  color:"black"
}

const text = {
  fontSize:{base :'md', md:'xl'},
  mb:5,
  mt:'-1rem'
}