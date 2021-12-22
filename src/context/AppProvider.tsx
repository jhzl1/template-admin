import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "../providers/auth/AuthProvider";
import ThemeProvider from "./ThemeProvider";

const AppProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppProvider;
