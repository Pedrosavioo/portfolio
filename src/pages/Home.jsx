import React from "react";
import imgBack from "./../imgs/home.png";
import styled from "styled-components";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HomeStyle = styled.section`
   background: url(${imgBack}) no-repeat;
   background-size: cover;
   width: 100vw;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: flex-end;

   & section {
      height: 100vh;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;

      & h1 {
         font-size: 3.5rem;
         font-family: var(--font-title);
      }
      
      & #div-buttons {
         display: flex;
         gap: 1rem;
         
         & .button-link {
            padding: .8rem 1.2rem;
            border: 1px solid rgba(0,0,0,.5);
            border-radius: 1rem;
            text-decoration: none;
            color: black;
            transition: .3s;
   
            &:hover {
               background: var(--color-text-logo);
               color: white;
            }
         }
      }
   }

`;

const Home = () => {
   const [text] = useTypewriter({
      words: ["Desenvolvedor Web Fullstack"],
      loop: 1,
   });

   return (
      <HomeStyle>
      <section>
         <div>
            <h1>{text}<Cursor /></h1> 
            <p>Transformando ideias em realidade com código.</p>
         </div>
         <div id="div-buttons">
            <a href="#" className="button-link">Portfolio</a>
            <a href="#" className="button-link">Contato</a>
         </div>
      </section>
      </HomeStyle>
   );
};

export default Home;
