import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: var(--fsS);
    padding: 0.5rem 0.9rem;
    font-weight: 600;
  `,
  medium: css`
    font-size: var(--fsM);
    padding: 0.7rem 1.7rem;
    font-weight: 600;
  `,
  large: css`
    font-size: var(--fsL);
    padding: 0.5rem 4rem;
    font-weight: 500;
  `,
  formSpecific: css`
    font-size: 13.5px;
    padding: 0.5rem 1.6rem;
    font-weight: 600;
  `,
};

const variations = {
  primary: css`
    background-color: var(--darkIndigo);
    color: var(--lightSilver);
    &:hover {
      background-color: var(--hoverIndigo);
    }
  `,
  secondary: css`
    background-color: var(--lightSilver);
    color: var(--darkIndigo);
    &:hover {
      background-color: var(--hoverIndigoGrey);
    }
  `,
  destructive: css`
    background-color: var(--darkRedOrange);
    color: var(--white);
    &:hover {
      background-color: var(--hoverRedOrange);
    }
  `,
};

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgb(0, 0, 0, 0.45), inset 0 0.1px 2px rgb(0, 0, 0, 0.25),
    inset -0 -0.1px 2px rgb(0, 0, 0, 0.25);
  cursor: pointer;
  border: none;
  border-radius: 2em;
  ${({ $variation }) => variations[$variation]}
  ${({ $size }) => sizes[$size]}
  transition: all 0.1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /* &:hover {
    transition: ease 0.4s;
  } */
  ${({ $disabled }) =>
    $disabled
      ? css`
          &:active {
            transform: scale(1);
          }
          color: var(--hoverIndigoGrey);
          &:hover {
            background-color: var(--lightSilver);
          }
          box-shadow: 0 1px 5px rgb(0, 0, 0, 0.3),
            inset 0 0.1px 2px rgb(0, 0, 0, 0.25),
            inset -0 -0.1px 2px rgb(0, 0, 0, 0.25);
        `
      : css`
          &:active {
            transform: scale(0.97);
          }
        `}
`;
