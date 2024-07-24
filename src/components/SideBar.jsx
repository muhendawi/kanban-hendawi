import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid var(--lightSilver);

  & > img {
    margin-top: 0.5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function SideBar() {
  return <StyledSidebar>SideBar</StyledSidebar>;
}

export default SideBar;
