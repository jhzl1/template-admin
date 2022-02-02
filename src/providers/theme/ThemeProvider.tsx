import { createContext, useEffect, useState } from "react";

//tipos de tema
type Theme = "dark" | "light";

interface ThemeContextProps {
  theme: Theme;
  changeTheme: () => void;
}

const THEME_APP = "theme_app";

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_APP) as never) || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    localStorage.setItem(THEME_APP, theme);

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const contextValue = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
