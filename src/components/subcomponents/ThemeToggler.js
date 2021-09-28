const ThemeToggler = ({ onThemeToggler, darkTheme }) => {
  return (
    <div className="theme-toggler-container" onClick={onThemeToggler}>
      <span className="theme-icon">
        <i className="fas fa-moon"></i>
      </span>
      <span className="theme-feedback">{darkTheme ? "ON" : "OFF"}</span>
    </div>
  );
};

export default ThemeToggler;
