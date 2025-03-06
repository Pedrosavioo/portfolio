import React, { useEffect, useState } from "react";
import "./Navigate.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSection, useCurrentSection } from "../../redux/current-section";
import { scrollTop, resetAnimation } from "../../redux/animations.-scroll";

const Navigate = () => {
   // Redux: CurrentSection
   const currentSession = useSelector(useCurrentSection);
   const dispatch = useDispatch();

   const [activeIndex, setActiveIndex] = useState(0);

   const handleMouseEnter = (index) => {
      setActiveIndex(index);
   };

   const handleMouseLeave = () => {
      setActiveIndex(currentSession); // Restaura o estado ao sair do hover
   };

   const handleMouseClick = (index) => {
      dispatch(selectSection(index));
   };

   useEffect(() => {
      setActiveIndex(currentSession);
   }, [currentSession]);

   return (
      <nav id="navigate-sessions">
         <ul>
            {[0, 1, 2, 3, 4].map((item, index) => (
               <li
                  key={index}
                  className={`${
                     activeIndex === index || // Cenário de sessão ativa
                     (currentSession > 3 && currentSession < 4 && index === 3) // Cenário de carrossel ativo
                        ? "active"
                        : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleMouseClick(index)}
               >
                  {item}
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navigate;
