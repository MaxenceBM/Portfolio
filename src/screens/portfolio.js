import React from "react";
import "../screens/style/portfolio.scss";
import FermeBLUM from "../assets/FermeBLUM.png";
import ProjetsInconnus from "../assets/ProjetsInconnus.png";


function Portfolio() {
  return (
    <>
      <div className="backgroundFolio">
        <div className="ContainerFolio" id="portfolio">
          <h1 className="TitreProjet" id="portfolio">Mes projets</h1>
          
        </div>
        
        <div className="containerProjets">
        <a href="./prezFermeBLUM">
        <img  className="imgProjetFermeBLUM" src={FermeBLUM} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
        <a href="https://example.com">
        <img className="imgProjetFermeBLUM" src={ProjetsInconnus} alt="image1" /></a>
      </div></div>
    </>
  );
}

export default Portfolio;
