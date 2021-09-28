const CloseBtn = ({ onCloseClick, darkTheme }) => {
  return (
    <>
      <button onClick={onCloseClick} className={`${darkTheme ? "dark" : ""}`}>
        <span className="cross">
          <i className="fas fa-long-arrow-alt-left" aria-hidden="true"></i>
        </span>
        <span>Back to Main</span>
      </button>
    </>
  );
};

export default CloseBtn;
