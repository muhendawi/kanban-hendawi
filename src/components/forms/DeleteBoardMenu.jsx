import { useState } from "react";
import StyledDeleteBoardMenu from "./DeleteBoardMenu.styled";

function DeleteBoardMenu({
  deleteBoardOpened,
  setDeleteBoard,
  onEdit,
  onDelete,
  onClose,
}) {
  return (
    <StyledDeleteBoardMenu $isMenuOpen={deleteBoardOpened}>
      <div onClick={onEdit}>
        <span>Edit Board</span>
      </div>
      <div onClick={onDelete}>
        <span>Delete Board</span>
      </div>
    </StyledDeleteBoardMenu>
  );
}

export default DeleteBoardMenu;
