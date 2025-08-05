import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../context/ThemeContext";

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function SettingsPage() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Container>
      <h1>הגדרות</h1>
      <p>מצב עיצוב נוכחי: <strong>{mode}</strong></p>
      <Button onClick={toggleTheme}>
        החלף בין מצב {mode === "light" ? "כהה" : "בהיר"}
      </Button>
    </Container>
  );
}
