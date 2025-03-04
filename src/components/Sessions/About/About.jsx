import React from "react";
import "./About.css";
import "./AboutAnimation.css";

import { useSelector } from "react-redux";
import { useAnimations } from "../../../redux/animations.-scroll";

import spiral from "./../../../imgs/neon-spiral.png";
import disc from "./../../../imgs/disc.png";
import imgCodeRight from "./../../../imgs/code-right.png";
import imgCodeLeft from "./../../../imgs/code-left.png";

const About = () => {
   const animations = useSelector(useAnimations);

   return (
      <section id="about-session">
         <div id="title-about">
            <h1
               className={`
               ${animations.animationExitBottom ? "exitBottom" : ""} 
               ${animations.animationExitTop ? "exitTop" : ""}
            `}
            >
               Olá, sou Pedro Sávio
            </h1>
            <p
               className={`
               ${animations.animationExitBottom ? "exitBottom" : ""} 
               ${animations.animationExitTop ? "exitTop" : ""}
            `}
            >
               Fullsatck / Entusiasta de JavaScript
            </p>
         </div>
         <div id="content-about">
            <p
               className={`
               ${animations.animationExitBottom ? "exitBottom" : ""} 
               ${animations.animationExitTop ? "exitTop" : ""}
            `}
            >
               Focado em criar soluções que sejam tanto inovadoras quanto
               funcionais.
            </p>
            <p
               className={`
               ${animations.animationExitBottom ? "exitBottom" : ""} 
               ${animations.animationExitTop ? "exitTop" : ""}
            `}
            >
               Resolutivo, organizado e atento aos detalhes. Leal, comprometido
               e apaixonado por tecnologia, vejo nela mais do que uma profissão:
               é a minha inspiração.
            </p>
            <p
               className={`
               ${animations.animationExitBottom ? "exitBottom" : ""} 
               ${animations.animationExitTop ? "exitTop" : ""}
            `}
            >
               Goste de atividades ao ar livre, futebol, videogames e de me
               desafiar em projetos criativos que me inspirem a crescer.
            </p>
         </div>
         <img
            src={imgCodeLeft}
            alt="code"
            id="code-left-about"
            className={`
               ${animations.animationExitBottom ? "codeToBottom" : ""}
               ${animations.animationExitTop ? "moveImgCodeTop" : ""}
            `}
         />
         <img
            src={imgCodeRight}
            alt="code"
            id="code-right-about"
            className={`
               ${animations.animationExitBottom && "fadeInImg"}
               ${animations.animationExitTop ? "moveImgCodeBottom" : ''}
            `}
         />
         <img
            src={spiral}
            alt="spiral"
            id="spiral"
            className={animations.animationExitBottom && "fadeInImg"}
         />
         <img
            src={disc}
            alt="disc"
            id="disc"
            className={animations.animationExitBottom && "fadeInImg"}
         />
      </section>
   );
};

export default About;
