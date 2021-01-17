import React, { useState } from "react";
import { SubscribeCard } from "../SubscribeCard/SubscribeCard";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import styles from "./Subscribes.module.css";

export const Subscribes = () => {
  const [currentMonthly, setCurrentMonthly] = useState(true);
  const changeHandler = () => {
    setCurrentMonthly(!currentMonthly);
  };
  return (
    <section className={styles.subscribes}>
      <h1 className={styles.subscribesHeading}>
        Get awesome features, without extra charges
      </h1>
      <h4 className={styles.subscribesParagraph}>
        The rise of mobile devices transforms the way we consume information
        entirely and the world's most elevant channels such as Facebook
      </h4>
      <div className={styles.subscribesRow}>
        <SwitchButton
          changeHandler={changeHandler}
          currentMonthly={currentMonthly}
        ></SwitchButton>
      </div>
      <div className={styles.subscribesRow}>
        <SubscribeCard
          currentMonthly={currentMonthly}
          monthlyCost={"0"}
          yearlyCost={"0"}
          subscribeName={"Business Class"}
          subscribeDescription={"For small teams or office"}
          subscribeAdvantages={[
            "Drag & Drop Builder",
            "1,000's of Templates",
            "Blog Support Tools",
            "eCommerce Store",
          ]}
          buttonTitle={"Start free trial"}
        ></SubscribeCard>
        <SubscribeCard
          currentMonthly={currentMonthly}
          monthlyCost={"99"}
          yearlyCost={"999"}
          subscribeName={"Pro Master"}
          subscribeDescription={"For Best opportunities"}
          subscribeAdvantages={[
            "Drag & Drop Builder",
            "1,000's of Templates",
            "Blog Support Tools",
            "eCommerce Store",
          ]}
          buttonTitle={"Start free trial"}
        ></SubscribeCard>
      </div>
    </section>
  );
};
