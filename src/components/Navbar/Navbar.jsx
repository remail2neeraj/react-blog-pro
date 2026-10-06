import React, { useContext } from 'react';
import Button from '../Button/Button.jsx';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarLinks,
  Searchinput,
  ActionButtons,
} from './Navbar.styles.js';
import ThemeContext from '../../context/ThemeContext.jsx';


const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <Logo />
          <NavbarLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavbarLinks>

          <ActionButtons>
            {/* <Searchinput type="text" placeholder="Search" /> */}
            <Button variant="info" size="small" onClick={toggleTheme}>{isDark ? "☀️ Light" : "🌙 Dark"}</Button>
            <Button variant="warning" size="small">Log in</Button>
          </ActionButtons>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;


