import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import UserContext from "../../context/Usercontext";
import Project from "../Project";

function Projects(props) {
  const { projects } = useContext(UserContext);
  return (
    <Stack direction="column" w="70%" minH="400px" mb={4}>
      <Text color="gray.200" fontSize="4xl">
        Repositorios
      </Text>
      <SimpleGrid minChildWidth="300px" spacing="7">
        {projects.map((pro, key) => {
          return <Project {...pro} key={key} />;
        })}
      </SimpleGrid>
    </Stack>
  );
}

export default Projects;
