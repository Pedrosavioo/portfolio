import React from "react";
import logoGif from "./../../imgs/logo.gif";
import "./Header.css";

const Header = () => {
   return (
      <header>
         <nav>
            <div>
               <img src={logoGif} alt="gif logo" />
            </div>
            <button>Contato</button>
         </nav>
      </header>
   );
};
export default Header;
