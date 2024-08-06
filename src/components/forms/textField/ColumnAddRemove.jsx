import StyledColumnAddRemove from "./ColumnAddRemove.styled";
import { CrossIcon } from "../../styles/Icons.styled";

function ColumnAddRemove() {
  return (
    <StyledColumnAddRemove>
      <input type="text" placeholder="e.g. Todo" />
      <CrossIcon />
    </StyledColumnAddRemove>
  );
}

export default ColumnAddRemove;
