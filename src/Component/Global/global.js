import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    background-color: yellow;
  }

  body{
    margin: 10vh auto;
    max-width: 1080px;
    width: 100%;
    text-align: center;
  }
`
