import React from "react";
import Button from './../../components/button/Button';
import imageHome from "./../../imgs/image-home.svg";
import './Home.css'

const Home = () => {
   return (
      <>
         <section id="home">
            <div id="content-home">
               <h1>Desenvolvedor de Software</h1>
               <p>
                  Transformando ideias em soluções digitais, com interfaces
                  inteligentes, interações eficientes e aplicações web
                  inovadoras que conectam tecnologia e experiência do usuário de
                  forma impecável.
               </p>
               <Button content="Sobre mim" />
            </div>
            <div id="div-img">
               <img src={imageHome} alt="developer" />
            </div>
         </section>
      </>
   );
};

export default Home;
