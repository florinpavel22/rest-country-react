import ThemeToggler from "./subcomponents/ThemeToggler";
import Container from "./subcomponents/Container";
import "./styles/header.css";

const Header = ({ onThemeToggler, darkTheme }) => {
  return (
    <header className={darkTheme ? "header dark" : "header"}>
      <Container>
        <h2>Where in the world?</h2>
        <ThemeToggler onThemeToggler={onThemeToggler} darkTheme={darkTheme} />
      </Container>
    </header>
  );
};

export default Header;
