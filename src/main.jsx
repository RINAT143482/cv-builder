import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes";

const ThemeContext = createContext();

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
