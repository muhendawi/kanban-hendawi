import { StyledNoData } from "./NoData.styled";
import { Button } from "../components";

function NoData({ text, btnText }) {
  return (
    <StyledNoData>
      <p>{text}</p>
      <Button $variation="primary" $size="medium">
        {btnText}
      </Button>
    </StyledNoData>
  );
}

export default NoData;
