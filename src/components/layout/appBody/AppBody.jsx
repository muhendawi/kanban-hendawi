import StyledAppBody from "./AppBody.styled";
import NoData from "../../../pages/NoData";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

function AppBody() {
  const boardsStore = useSelector((store) => store.boards);
  // console.log(boards.boards);
  console.log(boardsStore.boards[boardsStore.selectedItem]);
  return (
    <StyledAppBody>
      {/* <NoData
        text="This board is empty, create a new column to get started."
        btnText="Add New Column"
      /> */}
    </StyledAppBody>
  );
}

export default AppBody;
