import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

import styles from "./customButton.module.css";

interface ButtonProps {
  text: string;
  borderColor: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text, borderColor }) => {
  return (
    <button
      className={styles.button}
      style={{ border: `2px solid ${borderColor}` }}
    >
      {text}
      <span className={styles.arrow}>
        <RiArrowDropRightLine size={24} />
      </span>
    </button>
  );
};

export default CustomButton;
