function Wrapper({ onClick, children }) {
  return <div onClick={onClick}>{children}</div>;
}

export default Wrapper;
