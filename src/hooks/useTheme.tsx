import { useContext } from "react";
import { ThemeContext } from "../providers/theme/ThemeProvider";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default useTheme;
