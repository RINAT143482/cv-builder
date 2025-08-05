import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useThemeContext } from "../context/ThemeContext";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: bold;

  &.active {
    text-decoration: underline;
  }
`;

export default function NavBar() {
  const { mode } = useThemeContext();
  return (
    <Nav>
      <StyledLink to="/editor">עריכה</StyledLink>
      <StyledLink to="/preview">תצוגה</StyledLink>
      <StyledLink to="/settings">הגדרות</StyledLink>
    </Nav>
  );
}
