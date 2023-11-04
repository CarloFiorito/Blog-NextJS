import React from "react";
import { IButtonProps } from "./Button.model";
import styles from "./Button.module.scss";

const Button = ({ onClick, title, className = "" }: IButtonProps) => {
  return (
    <button
      id="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      <span> {title} </span>
    </button>
  );
};

export default Button;
