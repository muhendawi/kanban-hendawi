import StyledModal from "./Modal.styled";

function Modal({ onClick, isModalOpen, children }) {
  return (
    <StyledModal $isModalOpen={isModalOpen}>
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

export default Modal;
