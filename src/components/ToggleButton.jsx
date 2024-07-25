import styled from "styled-components";

const StyledToggleButton = styled.div`
  & label {
    width: 2.5rem;
    height: 1.2rem;
    position: relative;
    display: block;
    background-color: var(--darkIndigo);
    border-radius: 1em;
    /* box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
      inset 0px -5px 15px rgba(255, 255, 255, 0.4); */
    cursor: pointer;
    transition: 0.3s;
  }
  & label:hover {
    background-color: var(--hoverIndigo);
  }
  & input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  & label::after {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0.2em;
    left: 0.2em;
    border-radius: 1rem;
    background-color: var(--lightSilver);
    transition: 0.3s;
  }
  & input:checked + label {
  }
  input:checked + label::after {
    left: 2.3rem;
    transform: translateX(-100%);
  }
  & label:active:after {
    width: 1.3rem;
  }
`;

function ToggleButton({ handleToggling }) {
  return (
    <StyledToggleButton>
      <input type="checkbox" id="toggle-btn" onChange={handleToggling} />
      <label htmlFor="toggle-btn"></label>
    </StyledToggleButton>
  );
}

export default ToggleButton;
