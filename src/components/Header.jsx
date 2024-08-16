import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
   position: fixed;
   width: 100vw;
   padding: 0 2rem;
   height: 8vh;

   & a {
      color: var(--color-text-logo);
      color: white;
      text-decoration: none;
   }

   & span {
      font-weight: bold;
      color: var(--color-text-span-logo);
   }

   & nav {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & p {
         cursor: pointer;
      }

      & ul {
         display: flex;
         gap: 1rem;
         list-style: none;

         & a {
            color: black;
            text-decoration: none;
         }
      }
   }
`;

const Header = () => {
   return (
      <HeaderStyle>
         <nav>
            <p id="logo">
               <Link to="/home">
                  <span>&lt;/</span>Pedrosavioo<span>&gt;</span>
               </Link>
            </p>
            <ul>
               <Link to="/page">
                  <li>Page</li>
               </Link>
               <Link to="/page">
                  <li>Page</li>
               </Link>
               <Link to="/page">
                  <li>Page</li>
               </Link>
            </ul>
         </nav>
      </HeaderStyle>
   );
};
export default Header;
