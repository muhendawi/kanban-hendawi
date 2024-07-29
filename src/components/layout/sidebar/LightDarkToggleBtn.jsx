import { StyledLightDarkToggleBtn } from "./LightDarkToggleBtn.styled";

function LightDarkToggleBtn({ handleToggling }) {
  return (
    <StyledLightDarkToggleBtn>
      <input type="checkbox" id="toggle-btn" onChange={handleToggling} />
      <label htmlFor="toggle-btn"></label>
    </StyledLightDarkToggleBtn>
  );
}

export default LightDarkToggleBtn;
