import { theme } from "@/resources/theme";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

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
    <Card cursor="pointer" h="100%">
      <CardBody p="0">
        <Image
          src={fotosproducto}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="100%"
          h="200px"
          objectFit="cover"
        />
        <Stack mt="0" spacing="3" p="1rem">
          <Heading size="md">{nombre}</Heading>
          <Text fontSize="sm" color="text">
            {etiqueta}
          </Text>
          {/* <Text>
            {cortadescripcion}
          </Text> */}
          {/* <Text color="blue.600" fontSize="2xl">
          $450
        </Text> */}
        </Stack>
      </CardBody>
      {/* <Divider />
    <CardFooter>
      <ButtonGroup spacing="2">
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
        <Button variant="ghost" colorScheme="blue">
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter> */}
    </Card>
  );
};
