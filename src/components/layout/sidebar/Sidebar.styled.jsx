import styled from "styled-components";

export const StyledSidebar = styled.aside`
  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem 2rem 0;
    border-right: 2px solid var(--lightSilver);
    > div {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
