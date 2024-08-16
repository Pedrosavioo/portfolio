import React from "react";
import imgBack from "./../imgs/home.png";
import styled from "styled-components";

const HomeStyle = styled.section`
  background: url(${imgBack}) no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
`

const Home = () => {
   return (
      <HomeStyle>
         <p>página home</p>
      </HomeStyle>
   );
};

export default Home;
