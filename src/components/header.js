import React from "react";
import "../components/style/header.scss";
import "../screens/style//portfolio.scss";


const Header = () => {
  return (
    <>
      <header>
        <nav>
            <ul className="scrollContainer">
                <li><a href="/">Accueil</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
