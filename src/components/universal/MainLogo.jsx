import { DarkLogo } from "../index";
import styled from "styled-components";
//------------------------------------------------------------------->

const StyledMainLogo = styled.div`
  /* border-right: 1.5px solid var(--lightSilver); */
  background-color: var(--white);
  /* grid-column: 1/2; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.7rem;
  box-shadow: 0.1px 0 2px rgb(0, 0, 0, 0.25),
    inset -0 -0.1px 2px rgb(0, 0, 0, 0.25);
  /* box-shadow: 0 1px 10px rgb(0, 0, 0, 0.45),
    inset 0 -1px 10px rgb(0, 0, 0, 0.45); */
  /* box-shadow: 0 2px 10px rgb(0, 0, 0, 0.45),
    inset 0 -2px 10px rgb(0, 0, 0, 0.45); */
  /* box-shadow: 0 2px 10px rgb(0, 0, 0, 0.45), inset 0 -1px 3px rgb(0, 0, 0, 0.45); */
  @media (max-width: 768px) {
    display: none;
  }
`;
//------------------------------------------------------------------->

export default function MainLogo() {
  return (
    <StyledMainLogo>
      <DarkLogo />
    </StyledMainLogo>
  );
}
