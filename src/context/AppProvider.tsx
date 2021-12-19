import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <ChakraProvider>{children}</ChakraProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
