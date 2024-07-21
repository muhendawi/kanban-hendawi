import styled from "styled-components";

const ThreeDots = styled.img`
  cursor: pointer;
  &:hover {
    transition: ease 0.4s;
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;

const MainLogo = styled.img`
  width: auto;
  margin: 0 1em;
  /* @media (max-width: 768px) {
    display: none;
  } */
`;
export { ThreeDots, MainLogo };
