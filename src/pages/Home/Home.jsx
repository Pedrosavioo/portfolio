import React from "react";
import "./Home.css";
import Navigate from "../../components/Navigate/Navigate";
import HomeSession from "../../components/Sessions/Home/HomeSession";
import About from "../../components/Sessions/About/About";
import { useSelector } from "react-redux";
import { useCurrentSection } from "../../redux/current-section";
import Skills from "../../components/Sessions/Skills/Skills";
import Projects from "../../components/Sessions/Projects/Projects";
import Contact from "../../components/Sessions/Contact/Contact";

const Home = () => {
   const currentSession = useSelector(useCurrentSection);

   return (
      <>
         <Navigate />
         {currentSession === 0 && <HomeSession />}
         {currentSession === 1 && <About />}
         {currentSession === 2 && <Skills />}
         {currentSession >= 3 && currentSession < 4 && <Projects />}
         {currentSession === 4 && <Contact />}
      </>
   );
};

export default Home;
