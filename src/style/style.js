import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
     --color-primary: #FF577F ;
     --color-white: #FFF ;
     --color-primary-focus: #FF427F;
     --color-primary-negative:#59323F;
     --color-sucess:#3FE864;
     --color-negative: #E83F5B ;
     --grey-4: #121214;
     --grey-3:#212529;
     --grey-1:#868E96;
     --font-inter:'Inter', sans-serif;
     --color-list: rgba(18, 18, 20, 1);
    

  }


  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    background: #000;

  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: white;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }


`;