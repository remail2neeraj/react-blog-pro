import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{

font-family:'Inter',sans-serif;

background: ${({ theme }) => theme.colors.surface};;

color: ${({ theme }) => theme.colors.text};;

}

a{

text-decoration:none;

color:inherit;

}

img{

max-width:100%;
display:block;

}

button{

border:none;

cursor:pointer;

font-family:inherit;

}

ul{

list-style:none;

}
`;

export default GlobalStyles;