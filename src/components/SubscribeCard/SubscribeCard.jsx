import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./SubscribeCard.module.css";

export const SubscribeCard = ({
  currentMonthly,
  monthlyCost,
  yearlyCost,
  subscribeName,
  subscribeDescription,
  subscribeAdvantages,
  buttonTitle,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h1 className={styles.cost}>
          ${currentMonthly ? monthlyCost : yearlyCost}
          <span>{currentMonthly ? "/month" : "/year"}</span>
        </h1>
        <h3 className={styles.subscribeName}>{subscribeName}</h3>
        <h4 className={styles.subscribeDescription}>{subscribeDescription}</h4>
      </div>
      <div className={styles.cardBody}>
        {subscribeAdvantages.map((advantage, index) => {
          return (
            <h4 key={index} className={styles.advantage}>
              {advantage}
            </h4>
          );
        })}
        <CustomButton title={buttonTitle}></CustomButton>
      </div>
    </div>
  );
};
