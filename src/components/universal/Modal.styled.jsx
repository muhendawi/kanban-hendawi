import styled from "styled-components";

export const StyledModal = styled.div`
  > div {
    height: 150%;
    position: fixed;
    inset: 0;
    background-color: rgb(0, 0, 0, 0.5);
  }
  & div:last-child {
    width: 480px;
    padding: 32px;
    height: 450px;
    margin: auto;
    border-radius: 0.5rem;
    background-color: var(--white);
    @media (max-width: 768px) {
      width: 343px;
    }
  }
`;
