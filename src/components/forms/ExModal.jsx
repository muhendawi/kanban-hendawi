import { useState } from "react";
import StyledModal from "./Modal.styled";
import ColumnAddRemove from "./textField/ColumnAddRemove";
import { Button } from "../universal/Button.styled";

function ExModal({ onClose, isModalOpen }) {
  const [boardName, setBoardName] = useState("");
  console.log(boardName);
  return (
    <StyledModal $isModalOpen={isModalOpen}>
      <div onClick={onClose}></div>
      <div>
        <h3>Add new Board</h3>
        <label htmlFor="bName">Board Name</label>
        <input
          placeholder="e.g. Web Design"
          type="text"
          id="bName"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <label>Board Columns</label>
        <ColumnAddRemove />
        <ColumnAddRemove />
        <ColumnAddRemove />
        <ColumnAddRemove />
        <ColumnAddRemove />
        <Button $variation="primary" $size="formSpecific">
          + Add New Column
        </Button>
        <Button $variation="primary" $size="formSpecific">
          Create New Board
        </Button>
      </div>
    </StyledModal>
  );
}

export default ExModal;
