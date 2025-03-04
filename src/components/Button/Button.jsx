import React from "react";
import "./Button.css";
import lineImg from "./../../imgs/line.svg";

const Button = ({ content, onClick, className }) => {
   const classNameString = `btn ${className}`;
   return (
      <button className={classNameString} onClick={onclick}>
         {content}
         <img src={lineImg} alt="line button" />
      </button>
   );
};

export default Button;
