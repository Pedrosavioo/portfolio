import React from "react";
import Button from "../../Button/Button";
import "./HomeSession.css";

import { useSelector } from "react-redux";
import { useAnimations } from "../../../redux/animations.-scroll";

import imageHome from "./../../../imgs/image-home.svg";
import imgDesign from "./../../../imgs/img7.png";
import imgCodeBlur from "./../../../imgs/code-left.png";

const HomeSession = () => {
   const animations = useSelector(useAnimations);

   return (
      <section id="home-session">
         <div id="content-home">
            <h1 className={animations.animationExitTop ? "exitTop" : ""}>
               Desenvolvedor de Software
            </h1>
            <p className={animations.animationExitTop ? "exitTop" : ""}>
               Transformando ideias em soluções digitais, com interfaces
               inteligentes, interações eficientes e aplicações web inovadoras
               que conectam tecnologia e experiência do usuário de forma
               impecável.
            </p>
            <Button
               content="Sobre mim"
               className={animations.animationExitTop && "exitTop"}
            />
         </div>
         <div id="div-img">
            <img
               src={imageHome}
               alt="developer"
               className={animations.animationExitTop ? "exitTop" : ""}
            />
         </div>
         <img
            src={imgDesign}
            alt="design"
            id="img-design-home"
            className={animations.animationExitTop && "lighten"}
         />
         <img
            src={imgCodeBlur}
            alt="design"
            id="img-code"
            className={animations.animationExitTop && "exitTopCode"}
         />
      </section>
   );
};

export default HomeSession;
