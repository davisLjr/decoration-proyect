import { db } from "utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CategoryData {
  id: string;
  nombre: string;
  descripcion: string;
  image: string;
}

export const Category = () => {
  const [categorias, setCategorias] = useState<CategoryData[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const categoriasRef = collection(db, "categorias");
      const categoriasSnapshot = await getDocs(categoriasRef);
      const categoriasData = categoriasSnapshot.docs.map(doc => ({ id: doc.id, nombre: doc.data().nombre, descripcion: doc.data().descripcion, image: doc.data().image }));
      setCategorias(categoriasData);
      console.log('aca', categoriasData)
    };

    fetchCategorias();
  }, []);
  // height='50vh'
  return (
    <Box  maxW={{base:'1400px'}} m='0 auto'>
      <Heading textAlign='center' mb='2rem'>Categorias</Heading>
      <Flex justifyContent='center' textAlign='center' gap='10' w='100%' flexWrap={{base:'wrap', md:'nowrap'}}>
        {categorias.map(categoria => (
          <Box key={categoria.id} background='white' h='250px' width={{base: '100%', lg:'350px'}} position='relative' cursor='pointer'>
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex="1"
                bg="whiteAlpha.100"
              />

            <Box position='absolute' top='50%' transform='translateY(-50%)' w='100%' background='#ffffff69'>
              <Heading as='h4'>{categoria.nombre}</Heading>
              <Text>{categoria.descripcion}</Text>
            </Box>
            <Image src={categoria.image} alt={categoria.image} w='100%' h='100%' objectFit='cover'/>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
