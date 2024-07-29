import { ShowSidebarIcon } from "../../styles/Icons.styled";
import { StyledToggleSidebarBtn } from "./ToggleSidebarBtn.styled";

function ToggleSidebarBtn({ onClick }) {
  return (
    <StyledToggleSidebarBtn onClick={onClick}>
      <ShowSidebarIcon />
    </StyledToggleSidebarBtn>
  );
}

export default ToggleSidebarBtn;
