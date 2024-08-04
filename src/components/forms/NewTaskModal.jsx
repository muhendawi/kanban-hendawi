import StyledModal from "./Modal.styled";

function NewTaskModal({ onClick, isNewTaskOpen, children }) {
  return (
    <StyledModal $isModalOpen={isNewTaskOpen}>
      <div onClick={onClick}></div>
      <div
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClick(); // it should make opacity to 0 and z-index to -100
          }
        }}>
        {children}
      </div>
    </StyledModal>
  );
}

export default NewTaskModal;
