import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
//------------------------------------------------------------------->

const StyledLightDarkToggleBtn = styled.div`
  & label {
    width: 2.5rem;
    height: 1.2rem;
    position: relative;
    display: block;
    background-color: var(--darkIndigo);
    border-radius: 1em;
    cursor: pointer;
    transition: 0.3s;
  }
  & label:hover {
    background-color: var(--hoverIndigo);
  }
  & input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  & label::after {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0.2em;

    border-radius: 1rem;
    background-color: var(--lightSilver);
    transition: 0.3s;
  }
  & input:checked + label {
  }
  ${({ $isLightDarkBtnToggled }) =>
    $isLightDarkBtnToggled
      ? css`
          label::after {
            left: 2.3rem;
            transform: translateX(-100%);
          }
        `
      : css`
          label::after {
            left: 0.2em;
          }
        `}
  & label:active:after {
    width: 1.3rem;
  }
`;
//------------------------------------------------------------------->

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
