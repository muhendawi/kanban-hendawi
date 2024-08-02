import { useSelector } from "react-redux";
import { StyledModal } from "./Modal-v1.styled";
import { useDispatch } from "react-redux";
import { toggleNewBoardModal } from "../../store/board/board.slice";

function Modal({ children, onClick }) {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();
  console.log(boardsSlice.isNewBoardModalOpen);
  return (
    <StyledModal
      $isNewBoardOpen={boardsSlice.isNewBoardModalOpen}
      onClick={() => dispatch(toggleNewBoardModal())}>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            dispatch(toggleNewBoardModal()); // it should make opacity to 0 and z-index to -100
          }
        }}>
        {children}
      </div>
    </StyledModal>
  );
}

export default Modal;

/*
  return (
    <StyledModal>
      <div
        onClick={() => {
          dispatch(toggleNewBoardModal()); // it should make opacity to 0 and z-index to -100
        }}></div>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            dispatch(toggleNewBoardModal()); // it should make opacity to 0 and z-index to -100
          }
        }}>
        {children}
      </div>
    </StyledModal>
  );
} */
