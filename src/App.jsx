import { ThemeProvider } from "styled-components";
import MainPage from "./pages/MainPage";
import StyledGlobals from "./styles/Globals.styled";

const theme = {
  colors: {
    darkIndigo: "#635FC7",
    hoverIndigo: "#A8A4FF",
    darkBlack: "#000112",
    darkGrey: "#20212C",
    grey: "#2B2C37",
    lightGrey: "#3E3F4E",
    veryLightGrey: "#828FA3",
    hoverIndigoGrey: "#c9c9f3",
    lightSilver: "#F4F7FD",
    white: "#FFFFFF",
    darkRedOrange: "#EA5555",
    hoverRedOrange: "#FF9898",
  },
  sizes: {
    fsXl: "24px",
    fsL: "18px",
    fsM: ".8em",
    fsS: ".7em",

    lhXl: "30px",
    lhL: "23px",
    lhM: "19px",
    lhS: "15px",

    lsS: "2.4px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobals />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
