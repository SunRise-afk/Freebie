import React from "react";
import styles from "./SwitchButton.module.css";

export const SwitchButton = ({ currentMonthly, changeHandler }) => {
  return (
    <div className={styles.button} onClick={changeHandler}>
      <span className={`${currentMonthly ? styles.active : ""}`}>Monthly</span>
      <span className={`${!currentMonthly ? styles.active : ""}`}>
        Annually
      </span>
    </div>
  );
};
