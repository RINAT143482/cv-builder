import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { lightTheme, darkTheme } from "../styles/themes";

const ThemeContext = createContext();

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light");
  const [direction, setDirection] = useState("rtl"); // ברירת מחדל עברית

  // אם תרצי, תוכלי להוסיף toggle לכיוון הטקסט
  const toggleDirection = () => {
    setDirection((prev) => (prev === "rtl" ? "ltr" : "rtl"));
  };

  // או שמירת כיוון לפי מצב העיצוב (לא חובה)
  // useEffect(() => {
  //   setDirection(mode === "light" ? "rtl" : "ltr");
  // }, [mode]);

  const theme = {
    ... (mode === "light" ? lightTheme : darkTheme),
    direction, // מוסיפים את הכיוון לערכת הנושא
  };

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme, direction, toggleDirection }}>
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
