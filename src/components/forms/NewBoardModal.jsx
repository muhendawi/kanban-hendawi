import StyledModal from "./Modal.styled";

function NewBoardModal({ onClick, isNewBoardModalOpen, children }) {
  return (
    <StyledModal $isModalOpen={isNewBoardModalOpen}>
      <div onClick={onClick}></div>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClick();
          }
        }}>
        {children}
      </div>
    </StyledModal>
  );
}

export default NewBoardModal;
