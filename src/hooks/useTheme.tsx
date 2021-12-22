import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default useTheme;
