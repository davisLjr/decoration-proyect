import React, { useState } from "react";
import products from "../../../../public/products.json";
import { Piñata, Product } from "../components/Piñata";
import { Modal, Image, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Box } from "@chakra-ui/react";

export const Piñatas = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Box className="main-catalogue" display='flex' flexWrap='wrap' justifyContent='space-between' padding='1rem'>
      {products.productos.map((product: Product) => (
        <Box key={product.nombre} onClick={() => handleProductClick(product)} width={{base:'100%', lg:'350px'}}>
          <Piñata
            nombre={product.nombre}
            etiqueta={product.etiqueta}
            imagen={product.imagen} descripcion={""} tamaño={""} precio={0}          />
        </Box>
      ))}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProduct?.nombre}</ModalHeader>
          <ModalBody>
            <Image src={selectedProduct?.imagen} alt={selectedProduct?.nombre} />
            <p>{selectedProduct?.descripcion}</p>
            <p>{selectedProduct?.etiqueta}</p>
            <p>{selectedProduct?.tamaño}</p>
            <p>{selectedProduct?.precio}</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsModalOpen(false)}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
