import React from "react";
import "../screens/style/home.scss";
import Background from "../components/background";
import Header from "../components/header";
import imgProfile from "../assets/MoiRond.png";
import Portfolio from "./portfolio";
import Contact from "./contact";

function HomePage() {
  return (
    <>
      <div className="containerHome">
        <Header />
        <Background />
        <h1 className="titleHome">
          MAXENCE <br /> BLUM
        </h1>
      </div>
      <div className="photoProfile">
        <img className="imgProfile" src={imgProfile} alt="maxence Blum" />
      </div>
      <Portfolio />
      <Contact />
    </>
  );
}

export default HomePage;
