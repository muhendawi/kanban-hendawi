import StyledModal from "./Modal.styled";

function NewColumnModal({ onClick, isNewColumnModalOpen, children }) {
  return (
    <StyledModal $isModalOpen={isNewColumnModalOpen}>
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

export default NewColumnModal;
