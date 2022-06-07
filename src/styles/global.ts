import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
    scroll-behavior: smooth;


  scrollbar-width: thin;
  scrollbar-color: #333;



*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background-color: ${(props) => props.theme.colors.background};
}

*::-webkit-scrollbar-thumb {
  background-color:${(props) => props.theme.colors.cardBack};
  border-radius: 20px;

}

  }

  ul {
    list-style: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

  }

  .paragraph {
    font-size: calc(max(16px, 1.31vw));
  }

  .subTitle {
    font-size: 30pt;
  }

  a {
    text-decoration: none;
    color: greenyellow;
  }

  .containerError {
    width: 90%;
    margin: auto;
   text-align: center;
    margin-top: 150px;
    font-size: 20px;

    a {
      color: red;
      text-decoration: underline;
    }
  }
`;
