import { useState } from "react";
import { StyledLightDarkToggleItem } from "./LightDarkToggleItem.styled";
import LightDarkToggleBtn from "./LightDarkToggleBtn";
import { DarkthemeIcon, LightThemeIcon } from "../..";

function LightDarkToggleItem() {
  const [isToggle, setIsToggle] = useState(false);
  function handleToggling() {
    setIsToggle(!isToggle);
  }
  return (
    <StyledLightDarkToggleItem>
      <LightThemeIcon />
      <LightDarkToggleBtn handleToggling={handleToggling} />
      <DarkthemeIcon />
    </StyledLightDarkToggleItem>
  );
}

export default LightDarkToggleItem;
