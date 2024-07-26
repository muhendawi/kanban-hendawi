import { useState } from "react";
import styled from "styled-components";
import { DayIcon, NightIcon } from "./styles/SVGs.styled";
import iconDarkTheme from "../assets/icon-dark-theme.svg";
import iconLightTheme from "../assets/icon-light-theme.svg";
import ToggleButton from "./ToggleButton";

const StyledToggleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: var(--lightSilver);
  width: 95%;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.4rem;
  &:active {
    /* outline: none; */
    /* touch-action: none; */
  }
  & > div {
    display: flex;
    align-items: center;
    height: 3rem;
    margin-left: -0.3rem;
  }
`;

function ToggleItem() {
  const [isToggle, setIsToggle] = useState(false);
  function handleToggling() {
    setIsToggle(!isToggle);
  }
  return (
    <StyledToggleItem>
      <DayIcon src={iconLightTheme} alt="day icon" />
      <ToggleButton handleToggling={handleToggling} />
      <NightIcon src={iconDarkTheme} alt="night icon" />
    </StyledToggleItem>
  );
}

export default ToggleItem;
