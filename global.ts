import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import fonts from './theme/light';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fonts}

  html,
  body {
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  button {
    padding: 0;

    color: inherit;

    background-color: transparent;
    border-width: 0;
    cursor: pointer;

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  h1,h2,h3,h4,h5,h6,p, ul,li {
    margin:0;
    padding:0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  fieldset {
    padding: 0;

    border: 0;
  }
  
  /** Make scrollbar on windows look like Mac */
  ::-webkit-scrollbar {
    width: 16px;

    background-color: #fff;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border: 4px solid #fff;
    border-radius: 16px;

    cursor: pointer;
  }
  
  ::-webkit-scrollbar-button {
    display:none;
  }

  html,
  body,
  #__next {
    height: 100%;

    font-family: "Inter", Helvetica, Arial, sans-serif;
  }

  fieldset {
    margin: 0;
  }
`;

export default GlobalStyle;
