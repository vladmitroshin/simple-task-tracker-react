import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {};

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Simple Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
