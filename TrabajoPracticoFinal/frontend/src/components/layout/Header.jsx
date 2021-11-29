import React from "react";
import wallpaper from "../../images/wallpaper.png";
import "../../styles/header.css";

const Header = (props) => {
  return (
    <header>
      <div>
        <img src={wallpaper} width="100%" alt="Juegos-PC" className="w-75" />
      </div>
    </header>
  );
};

export default Header;
