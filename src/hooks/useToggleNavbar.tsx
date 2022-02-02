import { useContext } from "react";
import { NavbarContext } from "../providers/navbar/NavbarProvider";

const useToggleNavbar = () => {
  const toggleNavbarContext = useContext(NavbarContext);

  return toggleNavbarContext;
};

export default useToggleNavbar;
