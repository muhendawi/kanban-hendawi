import styled from "styled-components";

const StyledMainLogo = styled.div`
  border-right: 2px solid var(--lightSilver);
  background-color: var(--white);
  grid-column: 1/2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.7rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default StyledMainLogo;
