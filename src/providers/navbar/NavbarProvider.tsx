import { createContext, useState } from "react";

interface NavbarContextProps {
  showNavbar: boolean;
  handleShowNavbar: () => void;
}

export const NavbarContext = createContext({} as NavbarContextProps);

const NavbarProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const contextValue = {
    showNavbar,
    handleShowNavbar,
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
