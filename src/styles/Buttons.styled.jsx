import styled from "styled-components";

// $btnType = {"primary-l", "primary-s", "secondary", "destructive"}
const BaseButton = styled.button`
  margin: 0.5em; // temp
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border: none;
  border-radius: 2em;
  /* width: 15em; */
  font-weight: bold;
  cursor: pointer;
  padding: ${({ $padding }) => ($padding ? $padding : "0.5rem 5rem")};
  font-size: ${({ theme, $btnType }) =>
    $btnType === "primary-l" ? theme.sizes.fsM : theme.sizes.fsS};
  background-color: ${({ theme, $btnType }) => {
    if ($btnType === "primary-l" || $btnType === "primary-s") {
      return theme.colors.darkIndigo;
    } else if ($btnType === "secondary") {
      return theme.colors.lightSilver;
    } else if ($btnType === "destructive") {
      return theme.colors.darkRedOrange;
    }
  }};
  color: ${({ theme, $btnType }) => {
    if ($btnType === "primary-l" || $btnType === "primary-s") {
      return theme.colors.lightSilver;
    } else if ($btnType === "secondary") {
      return theme.colors.darkIndigo;
    } else if ($btnType === "destructive") {
      return theme.colors.white;
    }
  }};
  &:hover {
    background-color: ${({ theme, $btnType }) => {
      if ($btnType === "primary-l" || $btnType === "primary-s") {
        return theme.colors.hoverIndigo;
      } else if ($btnType === "secondary") {
        return theme.colors.hoverIndigoGrey;
      } else if ($btnType === "destructive") {
        return theme.colors.hoverRedOrange;
      }
    }};
    transition: ease 0.4s;
  }
`;

const TabletNavBtn = styled(BaseButton)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopBtn = styled(BaseButton)`
  @media (max-width: 768px) {
    display: none;
    transition: ease 0.3s;
  }
`;

export { DesktopBtn, TabletNavBtn };
