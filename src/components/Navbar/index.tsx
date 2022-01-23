import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="container-nav">
      <div className="nav-title-container">
        <Link to="/">
          <h1>Githut API</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
