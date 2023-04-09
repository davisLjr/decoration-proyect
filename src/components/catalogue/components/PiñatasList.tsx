import React, { useState, useEffect } from "react";
import { Piñata, Product } from "../components/Piñata";
import { Box, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Button, Spinner, Grid, GridItem } from "@chakra-ui/react";
import { db } from "../../../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const Piñatas = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productos, setProductos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "productos");
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
        setProductos(productsData);
        console.log('test', productsData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Grid  className="main-catalogue" templateColumns={{base:'repeat(1, 1fr)', sm:'repeat(2, 1fr)', md:'repeat(4, 1fr)'}} gap={6} padding={{base:"1rem 2rem", lg:"1rem 8rem"}} maxW='1400px' m='0 auto'>
      {loading ? (
        <Spinner w='150px' h='150px' margin='50px auto' color="primary" thickness='8px' />
      ) : (
        productos.map((product: Product) => (
          <GridItem  key={product.id} onClick={() => handleProductClick(product)} maxW='280px'>
            <Piñata nombre={product.nombre} etiqueta={product.etiqueta} fotosproducto={product.fotosproducto} cortadescripcion={""} descripcion={""} medidas={0} precio={0} id={undefined} />
          </GridItem>
        ))
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size='md'>
        <ModalOverlay />
        <ModalContent>
          <Image src={selectedProduct?.fotosproducto} alt={selectedProduct?.nombre} mb='1rem' h='300px' objectFit='cover'/>
          <ModalBody>
            <ModalHeader p='0'>{selectedProduct?.nombre}</ModalHeader>
            <Text fontSize="sm" color="text">
              {selectedProduct?.etiqueta}
            </Text>
            <Text fontSize="sm" color="text">
              {selectedProduct?.medidas}
            </Text>
            <Text fontSize="sm" color="text">
              {selectedProduct?.descripcion}
            </Text>
            <Text fontSize="sm" color="text" fontWeight="bold">
              Precio: ${selectedProduct?.precio}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsModalOpen(false)}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
};
