import "./styles.css";

import Button from "components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-container">
      <div className="home-title-container">
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
      </div>
      <div className="button-container-home">
        <Link to="/profiles">
          <Button text="Começar" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
