import { theme } from '@/resources/theme';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export interface Product {
cortadescripcion: string;
descripcion: string;
etiqueta: string;
medidas: number;
precio: number;
fotosproducto: string;
nombre: string;
id: any;
}

export const Piñata = ({
nombre,
cortadescripcion,
descripcion,
etiqueta,
medidas,
precio,
fotosproducto,
}: Product) => {
return (
  <Box boxShadow={theme.shadows.sm} padding='1rem' width={{base: '100%', lg:'350px'}}  objectFit='cover' marginBottom='2rem' className='test'>
    <Box height='250px' width='100%' position='relative'>
      <Image src={fotosproducto} alt={nombre} w='100%' h='100%' objectFit='cover' objectPosition='center top'
        position='absolute'    
        top='0'
        left='0'/>
    </Box>
    <Heading fontSize='lg' color='text'>{nombre}</Heading>
    <Text fontSize='sm' color='text'>{etiqueta}</Text>
  </Box>
);
};

