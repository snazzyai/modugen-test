import React from "react";
import { IButton } from "../interfaces/IButton";
import "../styles.css";

const Button: React.FC<IButton> = ({ text, handleClick }: IButton) => {
  return (
    <>
      <button onClick={handleClick} className="button">
        {text}
      </button>
    </>
  );
};

export default Button;
