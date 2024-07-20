import { createGlobalStyle } from "styled-components";

const StyledGlobals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

:root{
  --main-font: "Plus Jakarta Sans", sans-serif;

  --dark-indigo: "#635FC7";
  --hover-indigo: "#A8A4FF";
  --dark-black: "#000112";
  --dark-grey: "#20212C";
  --grey: "#2B2C37";
  --light-grey: "#3E3F4E";
  --very-light-grey: "#828FA3";
  --hover-indigo-grey: "#E4EBFA";
  --light-silver: "#F4F7FD";
  --white: "#FFFFFF";
  --dark-red-orange: "#EA5555";
  --hover-red-orange: "#FF9898";

  --fs-xl: 24px;
  --fs-l: 18px;
  --fs-m: 15px;
  --fs-s: 12px;

  --lh-xl: 30px;
  --lh-l: 23px;
  --lh-m: 19px;
  --lh-s: 15px;

  --ls-s: 2.4px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  /* border: 1px solid salmon; */
}
/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  width: 100%;
  scroll-behavior: smooth;
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
  font-family: var(--main-font);
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

/* -------------------- Colors Section --------------------- */

`;

export default StyledGlobals;
