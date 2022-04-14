import React from "react";
import { Box, Stack, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import DataProfile from "../DataProfile";

function Project({ name, stargazers_count, description, html_url }) {
  return (
    <Stack
      border="2px solid"
      borderColor="gray.200"
      borderRadius="0.375rem"
      color="gray.200"
      p="4"
      justifyContent="space-between"
    >
      <Stack direction="column">
        <DataProfile
          name="Nombre:"
          value={name}
          colorName="gray.200"
          fontSizeName="xl"
          colorValue="gray.500"
          fontSizeValue="xl"
        />
        <DataProfile
          name="Descripción:"
          value={description ?? "Sin descripción"}
          colorName="gray.200"
          fontSizeName="xl"
          colorValue="gray.500"
          fontSizeValue="xl"
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < stargazers_count ? "teal.500" : "gray.300"}
              />
            ))}
        </Box>
        <Link href={html_url} outline={"none"} border="none" isExternal>
          <FaGithub size="20" />
        </Link>
      </Stack>
    </Stack>
  );
}

export default Project;
