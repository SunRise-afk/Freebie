import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./Header.module.css";
import headerPhone from "../../assets/headerPhone.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.navContainer}>
        <div className={styles.logo}>
          <h2 className={styles.logoHeader}>
            App<span>Lab</span>
          </h2>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Key Features</li>
            <li>Pricing</li>
            <li>Testiminial</li>
            <li>FAQ</li>
            <li>
              <CustomButton title={"Try for free"}></CustomButton>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.jumboContainer}>
        <div className={styles.jumbo}>
          <div className={styles.awardLine}>
            <i className="fas fa-award"></i>
            <span>#1 Editors Choice App of 2020</span>
          </div>
          <h1 className={styles.jumboHeader}>
            Best app for your modern lifestyle
          </h1>
          <h3>
            Increase productivity with a simple to-do app. app for managing your
            personal budgets.
          </h3>
          <div className={styles.jumboLinks}>
            <CustomButton title={"Try for free"}></CustomButton>
            <h4>Watch demo video</h4>
          </div>
        </div>
        <div className={styles.headerPhoneContainer}>
          <img src={headerPhone} alt="" />
        </div>
      </section>
      <div className={styles.headerBG}></div>
    </header>
  );
};
