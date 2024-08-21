import { useState } from "react";
import StyledNewBoardModal from "./NewBoardModal.styled";
import ColumnAddRemove from "./textField/ColumnAddRemove";
import { Button } from "../universal/Button.styled";
import { useEffect } from "react";

function NewBoardModal({ onClose, isModalOpen }) {
  const [newBoard, setNewBoard] = useState({
    name: "",
    columns: [
      { name: "Todo", tasks: [] },
      { name: "Doing", tasks: [] },
    ],
  });
  const [boardName, setBoardName] = useState("");
  useEffect(() => {
    setNewBoard({
      name: boardName,
      columns: [
        { name: "Todo", tasks: [] },
        { name: "Doing", tasks: [] },
      ],
    });
  }, [boardName]);

  return (
    <StyledNewBoardModal $isModalOpen={isModalOpen}>
      <div
        onClick={() => {
          onClose();
          setTimeout(() => {
            setNewBoard({
              name: "",
              columns: [
                { name: "Todo", tasks: [] },
                { name: "Doing", tasks: [] },
              ],
            });
            setBoardName("");
          }, 500);
        }}></div>
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
        {/* {Array.from({ length: columnsNo }).map((index) => (
          <ColumnAddRemove key={index} itemIndex={index} />
        ))} */}
        {newBoard.columns.map((column, index) => (
          <ColumnAddRemove
            key={index}
            itemIndex={index}
            columnsArray={newBoard.columns}
            onSetNewBoard={setNewBoard}
            defaultInput={column.name}
          />
        ))}
        <Button
          $variation="primary"
          $size="formSpecific"
          onClick={() =>
            setNewBoard((currBoard) => ({
              ...currBoard,
              columns: [...currBoard.columns, { name: "", tasks: [] }],
            }))
          }>
          + Add New Column
        </Button>
        <Button $variation="primary" $size="formSpecific">
          Create New Board
        </Button>
      </div>
    </StyledNewBoardModal>
  );
}

export default NewBoardModal;
