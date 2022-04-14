import React, { useContext } from "react";
import { Stack } from "@chakra-ui/react";
import ImageProfile from "../ImageProfile";
import DataProfile from "../DataProfile";
import UserContext from "../../context/Usercontext";

function Main() {
  const { data } = useContext(UserContext);
  return (
    <Stack
      direction="row"
      w="70%"
      minH="200px"
      alignItems="center"
      border="2px solid"
      borderColor="gray.200"
      borderRadius="0.375rem"
    >
      <Stack direction="column" minW="250px" alignItems="center" p="2">
        <ImageProfile urlImage={data.avatar_url} />
      </Stack>
      <Stack direction="column" p={2}>
        <DataProfile
          name="Nombre:"
          value={data.name}
          colorName="gray.200"
          fontSizeName="2xl"
          colorValue="gray.500"
          fontSizeValue="2xl"
        />
        <DataProfile
          name="Username:"
          value={data.login}
          colorName="gray.200"
          fontSizeName="2xl"
          colorValue="gray.500"
          fontSizeValue="2xl"
        />
        <DataProfile
          name="Biografia:"
          value={data.bio}
          colorName="gray.200"
          fontSizeName="2xl"
          colorValue="gray.500"
          fontSizeValue="2xl"
        />
      </Stack>
    </Stack>
  );
}

export default Main;
