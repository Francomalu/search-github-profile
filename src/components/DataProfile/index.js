import React from "react";
import { Stack, Text } from "@chakra-ui/react";

function DataProfile(props) {
  return (
    <Stack direction="row" alignItems="start">
      <Text color={props.colorName} fontSize={props.fontSizeName}>
        {props.name}
      </Text>
      <Text color={props.colorValue} fontSize={props.fontSizeValue}>
        {props.value}
      </Text>
    </Stack>
  );
}

export default DataProfile;
