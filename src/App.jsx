import styled from "styled-components";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes"
import UserContext from "./context/UserContext";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeProvider";

const App = () => {
  //const [theme, setTheme] = useState("light");
  //   const toggleTheme = () => {
  //     setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light"
  //   );
  // };
  //////////////////////////////////////////
  const user = {
    name: "Neeraj",
    role: "Frontend Developer",
  };
  return (
    <UserContext.Provider value={user}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </UserContext.Provider>
  );

};

export default App;

// const Title=styled.h1`
//   color: ${({ theme }) => theme.colors.primary};
//   font-size: ${({ theme }) => theme.fontSize.hero};
//   font-family: ${({ theme }) => theme.fonts.heading};
//   text-align: center;
//   margin-top: 80px;
// `