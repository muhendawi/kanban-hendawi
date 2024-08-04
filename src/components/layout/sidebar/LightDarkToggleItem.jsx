import { StyledLightDarkToggleItem } from "./LightDarkToggleItem.styled";
import LightDarkToggleBtn from "./LightDarkToggleBtn";
import { DarkthemeIcon, LightThemeIcon } from "../..";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkTheme } from "../../../store/board/board.slice";

function LightDarkToggleItem() {
  const isDarkThemeOn = useSelector((store) => store.boards.isDarkThemeOn);
  const dispatch = useDispatch();
  function handleToggleDarkMode() {
    dispatch(toggleDarkTheme());
  }
  console.log(isDarkThemeOn);
  return (
    <StyledLightDarkToggleItem>
      <LightThemeIcon />
      <LightDarkToggleBtn handleToggling={handleToggleDarkMode} />
      <DarkthemeIcon />
    </StyledLightDarkToggleItem>
  );
}

export default LightDarkToggleItem;
