import { ListItem, List, Link } from "@chakra-ui/react";
import React from "react";

export interface ListProps {
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour: string;
}

export const ListH: React.FC<ListProps> = ({ optionOne, optionTwo, optionThree, optionFour }) => {
  return (
    <List display='flex' gap='10' alignItems='center'>
      <ListItem>
        <Link sx={style} href="/" >{optionOne}</Link>
      </ListItem>
      <ListItem>
        <Link sx={style} href="/">{optionTwo}</Link>
      </ListItem>
      <ListItem>
        <Link sx={style} href="/"> {optionThree}</Link>
      </ListItem>
      <ListItem>
        <Link sx={style} href="/"> {optionFour}</Link>
      </ListItem>
    </List>
  );
};

const style = {
  padding:'1.5rem 0.5rem'
}
