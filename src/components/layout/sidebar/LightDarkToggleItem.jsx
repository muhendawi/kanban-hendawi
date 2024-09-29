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
  width: 82%;
  box-shadow: 0 3px 7px rgb(0, 0, 0, 0.45), inset 0 1px 3px rgb(0, 0, 0, 0.25),
    inset -0 -1px 3px rgb(0, 0, 0, 0.25);
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
