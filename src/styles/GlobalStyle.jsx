import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body{
  overflow-x: hidden;
}

::-webkit-scrollbar{
  width: 1.5rem;
}

::-webkit-scrollbar-track{
  background-color: rgb(24 24 29);
}

::-webkit-scrollbar-thumb{
  background: #fff;
  border: 5px solid transparent;
  background-clip: content-box;
}

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
  color: #fff ;
}

li {
  list-style: none;
}

.container{
  max-width: 120rem;
  margin: 0 auto;
}

.grid{
  display: grid;
  gap : 9rem;
}

.grid-two-column {
  grid-template-columns:  repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns:  repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns:  1fr 1.2fr .5fr .8fr;
}

.common-heading{
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}

input,textarea {
  max-width: 50rem;
  color:${({ theme }) => theme.colors.black};
  padding: 1.6rem 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}

input[type="submit"]{
  max-width:16rem;
  margin-top:2rem;
  background-color:${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.4rem 2.2rem;
  border-style: solid;
  border-width: 0.1rem;
  text-tranform: uppercase;
  font-size: 1.8rem;
  cursor: poiter;
}

@media (max-width:${({ theme }) => theme.media.tab}) {
  .container{
    padding: 0 3.2rem;
  }
  .grid-three-column{
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
  
  html,body{
    font-size: 50%;
    overflow-x: hidden;
  }
  
  body {
    position: relative
  }

  .grid{
    gap: 3.2rem;
  }
  
  .grid-two-column, .grid-three-column ,.grid-four-column{
    grid-template-columns: 1fr ;
  }
}

`;