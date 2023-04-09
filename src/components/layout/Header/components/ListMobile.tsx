import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Link,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  IconButton,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { ListProps } from "./List";

export const ListHM: React.FC<ListProps> = ({
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}           
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline">
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent pt='1rem'>
          <DrawerCloseButton size='lg' />
          <DrawerHeader>DecorAle</DrawerHeader>

          <DrawerBody display='flex' flexDirection='column' gap='5px'>
            <Link href="/" p='10px 0px'>{optionOne}</Link>
            <Link href="/" p='10px 0px'>{optionTwo}</Link>
            <Link href="/" p='10px 0px'>{optionThree}</Link>
            <Link href="/" p='10px 0px'>{optionFour}</Link>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cerrar
            </Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
