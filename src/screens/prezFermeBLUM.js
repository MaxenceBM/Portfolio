import React from "react";
import "../screens/style/prezFermeBLUM.scss";
import FermeBLUM from "../assets/FermeBLUM1.svg";
import Header from "../components/header";
import ReactLogo from "../assets/React.svg";
import SassLogo from "../assets/SASS.svg";
import MysqlLogo from "../assets/mySQL.svg";
import GitHubLogo from "../assets/github.png";
import WebLogo from "../assets/web.png";

function prezFermeBLUM() {
  return (
    <>
      <div className="backgroundFermeBLUM">
        <Header />
        <div className="ContainerProjetFermeBLUM">
          <div className="imgFermeBLUM">
            <img src={FermeBLUM} alt="Logo" />
          </div>

          <div className="technoDeveloppement">
            <div className="containerDeveloppement">
              <h1 className="titreDev">Développé avec</h1>
              <div className="containerLogo">
                <img className="logoImg" src={ReactLogo} alt="LogoReact" />
                <img className="logoImg" src={SassLogo} alt="LogoSass" />
                <img className="logoImg" src={MysqlLogo} alt="LogoSQL" />
              </div>
            </div>
          </div>

          <div className="containerHistoireLiens">
            <div className="histoire">
              <h1>Pour la petite histoire </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco s
              </p>
            </div>

            <div className="liens">
              <div className="containerGitHub">
                <a href="https://github.com/MaxenceBM/Projet_Ferme_BLUM">
                  <div className="gitHub">
                    <img className="logoLiens" src={GitHubLogo} alt="LogoGithub" />
                    <p>Jette un oeil au repo GitHub</p>
                  </div>
                </a>
              </div>
              <div className="containerWeb">
                <a href="/">
                  <div className="siteWeb">
                    <img className="logoLiens" src={WebLogo} alt="LogoWeb" />
                    <p>Fais un tour directement sur le site</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default prezFermeBLUM;
