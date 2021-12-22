import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

export const successToast = (msg: string) => {
  toast({
    position: "top",
    description: msg,
    status: "success",
    duration: 5000,
    isClosable: true,
  });
};
