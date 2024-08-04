import { useSelector } from "react-redux";
import { StyledLightDarkToggleBtn } from "./LightDarkToggleBtn.styled";

function LightDarkToggleBtn({ handleToggling }) {
  const isLightDarkBtnToggled = useSelector(
    (store) => store.boards.isDarkThemeOn
  );
  return (
    <StyledLightDarkToggleBtn $isLightDarkBtnToggled={isLightDarkBtnToggled}>
      <input type="checkbox" id="toggle-btn" onChange={handleToggling} />
      <label htmlFor="toggle-btn"></label>
    </StyledLightDarkToggleBtn>
  );
}

export default LightDarkToggleBtn;
