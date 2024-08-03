import { useSelector } from "react-redux";
import { StyledModal } from "./Modal-v2.styled";
import { useDispatch } from "react-redux";
import { toggleNewBoardModal } from "../../store/board/board.slice";

function Modal({ children }) {
  const boardsSlice = useSelector((store) => store.boards);
  const dispatch = useDispatch();

  return (
    <StyledModal $isNewBoardOpen={boardsSlice.isNewBoardModalOpen}>
      <div
        onClick={() => {
          dispatch(toggleNewBoardModal());
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
}

export default Modal;
