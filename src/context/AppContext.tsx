import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "../providers/auth/AuthProvider";
import ThemeProvider from "../providers/theme/ThemeProvider";

const AppContext = ({
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

export default AppContext;
