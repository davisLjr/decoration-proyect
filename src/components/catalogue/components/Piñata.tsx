import { theme } from '@/resources/theme';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

export interface Product {
nombre: string;
descripcion: string;
etiqueta: string;
tamaño: string;
precio: number;
imagen: string;
}

export const Piñata = ({
nombre,
descripcion,
etiqueta,
tamaño,
precio,
imagen,
}: Product) => {
return (
  <Box boxShadow={theme.shadows.sm} padding='1rem' width={{base: '100%', lg:'350px'}} marginBottom='2rem'>
    <Image src={imagen} alt={nombre} w='100%'/>
    <Heading fontSize='lg' color='text'>{nombre}</Heading>
    <Text fontSize='sm' color='text'>{etiqueta}</Text>
  </Box>
);
};
