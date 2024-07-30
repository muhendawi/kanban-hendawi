import { StyledNoData } from "./NoData.styled";
import { Button } from "../components";
import { FaPlus } from "react-icons/fa6";

function NoData({ text, btnText }) {
  return (
    <StyledNoData>
      <p>{text}</p>
      <Button $variation="primary" $size="medium">
        <FaPlus /> {btnText}
      </Button>
    </StyledNoData>
  );
}

export default NoData;
