import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      {location.pathname === "/" ? (
        <Link to="/about">About</Link>
      ) : (
        <Link to="/">Go back</Link>
      )}
    </footer>
  );
};

export default Footer;
