import { Bell as BellIcon } from "../../assets/icons/Bell.js";
import { getCurrentTimeFormatted } from "../../utils/getCurrentTime.js";
import { useState } from "react";
import { Lens as LensIcon } from "../../assets/icons/Lens.js";
import "./HomeHeader.css";
1;
export const HeaderContainer = () => {
  const [name] = useState("Matias");
  return (
    <header className="home-header-container">
      <img className="home-header-picture" src="image 1.png" alt="" />
      <div className="home-header-left">
        <div className="home-header-subleft">
          <h2>{getCurrentTimeFormatted()}</h2>
          <h1>
            Hola <strong>{name}</strong> 👋🏽
          </h1>
        </div>
      </div>
      <div className="home-header-right">
        <label htmlFor="">
          <LensIcon />
        </label>
        <BellIcon />
      </div>
    </header>
  );
};
