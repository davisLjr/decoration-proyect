import React, { useState, useEffect } from "react";
import { Piñata, Product } from "../components/Piñata";
import { Box, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Button, Spinner } from "@chakra-ui/react";
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
    <Box className="main-catalogue" display="flex" flexWrap="wrap" justifyContent="space-between" padding="1rem">
      {loading ? (
        <Spinner size="xl" color="primary" />
      ) : (
        productos.map((product: Product) => (
          <Box key={product.id} onClick={() => handleProductClick(product)} width={{ base: "100%", lg: "350px" }}>
            <Piñata nombre={product.nombre} etiqueta={product.etiqueta} fotosproducto={product.fotosproducto} cortadescripcion={""} descripcion={""} medidas={0} precio={0} id={undefined} />
          </Box>
        ))
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProduct?.nombre}</ModalHeader>
          <ModalBody>
            <Image src={selectedProduct?.fotosproducto} alt={selectedProduct?.nombre} />
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
    </Box>
  );
};
