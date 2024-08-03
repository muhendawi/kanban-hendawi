import styled, { css } from "styled-components";
import addTaskMobileIcon from "../../assets/icon-add-task-mobile.svg";
import boardIcon from "../../assets/icon-board.svg";
import checkIcon from "../../assets/icon-check.svg";
import chevronDownIcon from "../../assets/icon-chevron-down.svg";
import chevronUpIcon from "../../assets/icon-chevron-up.svg";
import crossIcon from "../../assets/icon-cross.svg";
import darkThemeIcon from "../../assets/icon-dark-theme.svg";
import hideSidebarIcon from "../../assets/icon-hide-sidebar.svg";
import showSidebarIcon from "../../assets/icon-show-sidebar.svg";
import lightThemeIcon from "../../assets/icon-light-theme.svg";
import verticalEllipsisIcon from "../../assets/icon-vertical-ellipsis.svg";
import darkLogo from "../../assets/logo-dark.svg";
import lightLogo from "../../assets/logo-light.svg";
import mobileLogo from "../../assets/logo-mobile.svg";
import plusSvgRepoComIcon from "../../assets/plus-svgrepo-com.svg";
//------------------------------------------------------------------------->
// the three dots menu (vertical ellipsis)
const StyledVerticalEllipsisIcon = styled.img`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    transition: ease 0.4s;
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;
export function VerticalEllipsis() {
  return (
    <StyledVerticalEllipsisIcon
      src={verticalEllipsisIcon}
      alt="vertical ellipsis menu"
    />
  );
}
// the main logo - dark one
const StyledDarkLogo = styled.img``;
export function DarkLogo() {
  return <StyledDarkLogo src={darkLogo} alt="the main logo dark" />;
}
// the light theme icon for toggle item
const StyledLightThemeIcon = styled.img``;
export function LightThemeIcon() {
  return <StyledLightThemeIcon src={lightThemeIcon} alt="light theme icon" />;
}
// the dark theme icon for toggle item
const StyledDarkthemeIcon = styled.img``;
export function DarkthemeIcon() {
  return <StyledDarkthemeIcon src={darkThemeIcon} alt="dark theme icon" />;
}
// the board icon - for items
const StyledBoardIcon = styled.img``;
export function BoardIcon() {
  return <StyledBoardIcon src={boardIcon} alt="the board icon" />;
}
// the chevron down icon for nav menu on mobile view
const StyledChevronDownIcon = styled.img`
  padding: 0.5rem 0.8rem;
  margin-left: -0.5rem;
  /* width: 10%;
  height: 10%; */
  cursor: pointer;
  transition: all ease 0.3s;
  ${({ $isMobileMenuToggled }) =>
    $isMobileMenuToggled
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}/* border: 1px solid blue; */
`;
export function ChevronDownIcon({ onClick, isMobileMenutoggled }) {
  return (
    <StyledChevronDownIcon
      $isMobileMenuToggled={isMobileMenutoggled}
      onClick={onClick}
      src={chevronDownIcon}
      alt="the chevron down icon"
    />
  );
}
// the chevron up icon for nav menu on mobile view
const StyledChevronUpIcon = styled.img``;
export function ChevronUpIcon() {
  return <StyledChevronUpIcon src={chevronUpIcon} alt="the chevron up icon" />;
}
// the show sidebar btn
const StyledShowSidebarIcon = styled.img`
  width: 20px;
  margin-top: 1.1rem;
  margin-left: 2.3rem;
`;
export function ShowSidebarIcon() {
  return (
    <StyledShowSidebarIcon src={showSidebarIcon} alt="the show sidebar icon" />
  );
}
// the hide sidebar btn
const StyledHideSidebarIcon = styled.img``;
export function HideSidebarIcon() {
  return (
    <StyledHideSidebarIcon src={hideSidebarIcon} alt="the hide sidebar icon" />
  );
}
// the mobile logo
const StyledMobileLogo = styled.img``;
export function MobileLogo() {
  return <StyledMobileLogo src={mobileLogo} alt="the mobile logo" />;
}
//
