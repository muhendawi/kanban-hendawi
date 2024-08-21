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
  gap: 1.5rem;
  background-color: var(--lightSilver);
  width: 95%;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.4rem;
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
