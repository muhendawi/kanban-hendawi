import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

}
/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  width: 100%;
  scroll-behavior: smooth;

  --darkIndigo: #635FC7;
  --hoverIndigo: #A8A4FF;
  --darkBlack: #000112;
  --darkGrey: #20212C;
  --grey: #2B2C37;
  --lightGrey: #3E3F4E;
  --veryLightGrey: #828FA3;
  --hoverGrey: #E4EBFA;
  --hoverIndigoGrey: #c9c9f3;
  --lightSilver: #F4F7FD;
  --verylightSliver: #ecf2fc;
  --white: #FFFFFF;
  --darkRedOrange: #EA5555;
  --hoverRedOrange: #FF9898;

  --fsXl: 24px;
  --fsL: 18px;
  --fsM: 15px;
  --fsS: 12px;

  --lhXl: 30px;
  --lhL: 23px;
  --lhM: 19px;
  --lhS: 15px;

  --lsS: 2.4px;

  background-color: #F4F7FD;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
  
  
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core body defaults */
body {
  font-family: "Plus Jakarta Sans", sans-serif;
  width: 100%;
  min-height: 100vh;
  line-height: 1.5;
  margin: 0;
  padding: 0; 
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}
`;

export default GlobalStyles;
