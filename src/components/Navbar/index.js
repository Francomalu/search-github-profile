import { Input, IconButton, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Navbar(props) {
  function character(e) {
    e.preventDefault();
    props.characters(e.target[0].value);
  }
  return (
    <Stack
      direction="row"
      m="0 auto"
      w="50%"
      h="100px"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={character}>
        <Input
          placeholder="Ingrese su nombre de perfil..."
          size="md"
          color="gray.200"
          name="search"
          mr="10px"
        ></Input>
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          type="submit"
        />
      </form>
    </Stack>
  );
}

export default Navbar;
