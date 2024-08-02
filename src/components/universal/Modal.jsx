import { StyledModal } from "./Modal.styled";
import { toggleNewBoardModal } from "../../store/board/board.slice";
import { useDispatch } from "react-redux";

function Modal({ children }) {
  const dispatch = useDispatch();
  return (
    <StyledModal>
      <div
        onClick={() => {
          dispatch(toggleNewBoardModal());
        }}></div>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            dispatch(toggleNewBoardModal());
          }
        }}>
        {children}
      </div>
    </StyledModal>
  );
}

export default Modal;
