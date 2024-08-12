import styled from "styled-components";

export const StyledCreateNewBoard = styled.div`
  min-height: 3rem;
  width: 100%;
  padding: 0.8rem 1.7rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  > svg {
    fill: var(--darkIndigo);
  }
  > p {
    color: var(--darkIndigo);
  }
  > img {
  }
  &:hover {
    background-color: var(--hoverGrey);
    transition: ease 0.4s;
  }
`;
