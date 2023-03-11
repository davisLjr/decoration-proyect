import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, MenuList, MenuItem, Menu, MenuButton, IconButton } from "@chakra-ui/react";
import React from "react";
import { ListProps } from "./List";

export const ListHM: React.FC<ListProps> = ({ optionOne, optionTwo, optionThree, optionFour }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        <MenuItem >
          <Link href="/">{optionOne}</Link>
        </MenuItem>
        <MenuItem >
        <Link href="/">{optionTwo}</Link>
        </MenuItem>
        <MenuItem >
        <Link href="/">{optionThree}</Link>
        </MenuItem>
        <MenuItem >
        <Link href="/">{optionFour}</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

