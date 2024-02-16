import { Bell as BellIcon } from "../../assets/icons/Bell.jsx";
import { getCurrentTimeFormatted } from "../../utils/getCurrentTime.js";
import { useState } from "react";
import { Lens as LensIcon } from "../../assets/icons/Lens.jsx";
import "./Home.css";
export const Home = () => {
  const [name] = useState("Matias");
  return (
    <section className="home-container">
      <header className="home-header-container">
        <div className="home-header-left">
          <div className="home-header-subleft">
            <h2>{getCurrentTimeFormatted()}</h2>
            <h1>
              Hola <strong>{name}</strong> 👋🏽
            </h1>
          </div>
          <img className="profile-pic" src="./image 1.png" alt="profile-pic" />
        </div>
        <div className="home-header-right">
          <label htmlFor="">
            <LensIcon />
          </label>
          <BellIcon />
        </div>
      </header>
    </section>
  );
};
