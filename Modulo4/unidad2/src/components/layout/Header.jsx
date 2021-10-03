import React from "react";
import wallpaper from "../../images/wallpaper.png";

const Header = (props) => {
  return (
    <header>
      <div>
        <img src={wallpaper} width="100%" alt="Juegos-PC" />
      </div>
    </header>
  );
};

export default Header;
