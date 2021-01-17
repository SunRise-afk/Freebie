import React from "react";
import styles from "./CustomButton.module.css";

export const CustomButton = ({ title }) => {
  return (
    <div className={styles.button}>
      <span>{title}</span>
    </div>
  );
};
