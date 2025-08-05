// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    /* כיוון כללי לעברית */
    direction: rtl;
    text-align: right;
  }

  input, textarea, select {
    direction: rtl;
    text-align: right;
    font-size: 1rem;
  }

  /* מחלקה לכיווניות אנגלית */
  .ltr {
    direction: ltr;
    text-align: left;
    unicode-bidi: embed; /* rtl */
  }

  /* מרכז תוכן */
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  /*  כפתורים ואלמנטים נוספים א */
  button {
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
