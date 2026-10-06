import React, { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import ThemeContext from "./ThemeContext";
import { lightTheme, darkTheme } from "../styles/theme";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme,}}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;