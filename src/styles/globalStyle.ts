import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#ffff00',
  secondary: '#ff00ff',
  background: '#f2f2f2',
  text: '#000000',
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: ${colors.background};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, select {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
