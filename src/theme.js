import { extendTheme, flexbox } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        background: "gray.800",
      },
      form: {
        display: "flex",
        width: "100%",
      },
    },
  },
});
