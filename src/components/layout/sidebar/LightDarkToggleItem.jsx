import LightDarkToggleBtn from "./LightDarkToggleBtn";
import { DarkthemeIcon, LightThemeIcon } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkTheme } from "../../../store/board/board.slice";
import styled from "styled-components";
//------------------------------------------------------------------->

const StyledLightDarkToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  /* margin-left: -0.5rem; */
  gap: 1.5rem;
  width: 90%;
  box-shadow: 0 0.01px 5px rgb(0, 0, 0, 0.25),
    inset 0 0.1px 2px rgb(0, 0, 0, 0.25), inset -0 -0.1px 2px rgb(0, 0, 0, 0.25);
  margin-bottom: 0.5rem;
  border-radius: 0.4rem;
  background-color: var(--verylightSilver);
  & > div {
    display: flex;
    align-items: center;
    height: 3rem;
    margin-left: -0.3rem;
  }
`;
//------------------------------------------------------------------->

function LightDarkToggleItem() {
  const isDarkThemeOn = useSelector((store) => store.boards.isDarkThemeOn);
  const dispatch = useDispatch();
  function handleToggleDarkMode() {
    dispatch(toggleDarkTheme());
  }
  return (
    <StyledLightDarkToggleItem>
      <LightThemeIcon />
      <LightDarkToggleBtn handleToggling={handleToggleDarkMode} />
      <DarkthemeIcon />
    </StyledLightDarkToggleItem>
  );
}

export default LightDarkToggleItem;
