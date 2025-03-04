import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import {
   nextSection,
   previousSection,
   useCurrentSection,
} from "../redux/current-section";
import { useDispatch, useSelector } from "react-redux";
import {
   resetAnimation,
   scrollBottom,
   scrollTop,
} from "../redux/animations.-scroll";
import { debounce } from "lodash";

const Layout = () => {
   const dispatch = useDispatch();

   // Função para lidar com o evento de scroll
   const handleScroll = debounce((event) => {
      if (event.deltaY > 0) {
         // Scroll para baixo
         dispatch(scrollBottom());

         setTimeout(() => {
            dispatch(nextSection());
            dispatch(resetAnimation());
         }, 1000);
      }
      if (event.deltaY < 0) {
         // Scroll para cima
         dispatch(scrollTop());

         setTimeout(() => {
            dispatch(previousSection());
            dispatch(resetAnimation());
         }, 1000);
      }
   }, 300); // Delay de 300ms entre chamadas

   useEffect(() => {
      // Adiciona o evento ao montar o componente
      window.addEventListener("wheel", handleScroll);

      return () => {
         // Remove o evento ao desmontar o componente
         window.removeEventListener("wheel", handleScroll);
      };
   }, [handleScroll]); // Adiciona a dependência da função

   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
      </>
   );
};

export default Layout;
