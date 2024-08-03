import styled, { css } from "styled-components";

const StyledMobileMenu = styled.div`
  > div:first-child {
    position: fixed;
    inset: 0;
    background-color: rgb(0, 0, 0, 0.5);
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem 1rem 0;
    min-height: 10rem;
    border-radius: 0.5rem;
    /* width: 500px;
  height: 600px; */
    background-color: var(--white);

    position: fixed;
    top: 9%;
    right: 10%;
    left: 10%;
    position: fixed;
    ${({ $isSidebarHidden }) =>
      $isSidebarHidden &&
      css`
        opacity: 1;
        transform: translateY(0);
      `}

    > h3 {
      align-self: flex-start;
    }
    > div:first-child {
      /* height: 100%; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      > div {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    /* left: -1000px; */
    /* display: none; */
  }
`;

export default StyledMobileMenu;
