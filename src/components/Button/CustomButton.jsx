import React from "react";

import buttonStyle from "./CustomButton.module.scss"; 

const CustomButton = ({ children, onClick, color, gradient, style, ...props }) => {
  return (
    <button
      className={buttonStyle.button}
      onClick={onClick}
      style={{
        background: gradient
          ? `linear-gradient(160deg, rgba(81,56,238,1) 0%, rgba(127,0,127,1) 100%)`
          : "none",
          color,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};



export default CustomButton;