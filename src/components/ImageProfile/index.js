import React from "react";
import { Image } from "@chakra-ui/react";

function ImageProfile(props) {
  return (
    <Image p="4" boxSize="200px" borderRadius="full" src={props.urlImage} />
  );
}

export default ImageProfile;
