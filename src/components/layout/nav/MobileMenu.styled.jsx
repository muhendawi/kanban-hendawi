import styled, { css } from "styled-components";

const StyledMobileMenu = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: -5rem;
  background-color: rgb(0, 0, 0, 0.45);
  opacity: 0;
  z-index: -101;
  transition: ease-out 0.15s;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /* transform: scale(0.5); */
  > div:first-child {
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    bottom: 0;
    @media (min-width: 768px) {
      display: none;
      top: -1000px;
    }
  }
  > div:last-child {
    transform: translateY(-15%);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    max-height: 60%;
    padding: 1rem 1rem 1rem 0;
    border-radius: 0.5rem;
    background-color: var(--white);
    position: absolute;
    top: 3%;
    right: 5%;
    left: 5%;
    /* > h3 {
      align-self: flex-start;
    } */
    > div:first-of-type {
      /* max-height: 30%; */
      overflow: auto;
    }
  }
  ${({ $isMobileMenuOpen }) =>
    $isMobileMenuOpen &&
    css`
      > div:last-child {
        transform: translateX(0);
      }
    `}
  @media (min-width: 768px) {
    opacity: 0;
    top: -1000px;
    z-index: -1000;
  }
  ${({ $isMobileMenuOpen }) =>
    $isMobileMenuOpen &&
    css`
      opacity: 1;
      /* transform: scale(1); */
      z-index: 700;
    `}
`;

export default StyledMobileMenu;
