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
  /* transform: scale(0.5); */
  transform: translateY(-5%);
  transition: all 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  > div:first-child {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media (min-width: 768px) {
      display: none;
      top: -1000px;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem 1rem 0;
    min-height: 10rem;
    border-radius: 0.5rem;
    background-color: var(--white);
    position: fixed;
    top: 3%;
    right: 8%;
    left: 8%;
    > h3 {
      align-self: flex-start;
    }
  }
  ${({ $isMobileMenuOpen }) =>
    $isMobileMenuOpen &&
    css`
      opacity: 1;
      /* transform: scale(1); */
      transform: translateX(0);
      z-index: 700;
    `}
  @media (min-width: 768px) {
    display: none;
    top: -1000px;
  }
`;

export default StyledMobileMenu;
