import { ShowSidebarIcon } from "../../styles/Icons.styled";
import { StyledToggleSidebarBtn } from "./ToggleSidebarBtn.styled";

function ToggleSidebarBtn({ onClick, isSidebarHidden }) {
  return (
    <StyledToggleSidebarBtn
      $isSidebarHidden={isSidebarHidden}
      onClick={onClick}>
      <ShowSidebarIcon />
    </StyledToggleSidebarBtn>
  );
}

export default ToggleSidebarBtn;
