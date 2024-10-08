import styled from "styled-components";
import { Button } from "../universal/Button.styled";
import { motion } from "framer-motion";

const StyledDeleteModal = styled.div`
  position: fixed;
  inset: 0;
  top: -5rem;
  bottom: -5rem;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  backdrop-filter: blur(1px);
`;
const DeleteBackdrop = styled.div`
  background-color: rgb(255, 255, 255, 0.85);
  position: fixed;
  inset: 0;
`;
const DeleteContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 480px;
  /* max-height: calc(90% - 10rem); */
  padding: 2.5rem 2rem;
  border-radius: 0.6rem;
  background-color: var(--white);
  /* box-shadow: 0 5px 15px rgb(0, 0, 0, 0.45); */
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.45), inset 0 1px 5px rgb(0, 0, 0, 0.25),
    inset -0 -1px 5px rgb(0, 0, 0, 0.25);
  z-index: 801;
  position: relative;
  @media (max-width: 768px) {
    max-width: 343px;
    min-height: 200px;
  }
`;
const DeleteTitle = styled.h3`
  font-size: calc(var(--fsXl) - 3px);
  color: var(--darkRedOrange);
  margin: 0;
  line-height: 1.5;
  letter-spacing: 0.1px;
`;
const DeleteMessage = styled.p`
  color: var(--veryLightGrey);
  font-size: calc(var(--fsM) - 1.5px);
  line-height: 1.7;
  letter-spacing: 0.1px;
  font-weight: 500;
  margin-bottom: 1rem;
`;
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  > button {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    > button {
      width: 100%;
    }
  }
`;

const MotionDeleteModal = motion.create(StyledDeleteModal);
function DeleteModal({ children, onDelete, onCancel, modalTitle }) {
  return (
    <MotionDeleteModal
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.2, type: "spring", mass: 0.5 },
      }}>
      <DeleteBackdrop />
      <DeleteContentContainer>
        <DeleteTitle>Delete this {modalTitle}?</DeleteTitle>
        <DeleteMessage>{children}</DeleteMessage>
        <ButtonsContainer>
          <Button $variation="destructive" $size="small" onClick={onDelete}>
            Confirm
          </Button>
          <Button $variation="secondary" $size="small" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonsContainer>
      </DeleteContentContainer>
    </MotionDeleteModal>
  );
}

export default DeleteModal;
