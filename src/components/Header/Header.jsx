import React from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./Header.module.css";
import headerPhone from "../../assets/headerPhone.png";

export const Header = () => {
  return (
    <header className={styles.header} id="home">
      <section className={styles.navContainer}>
        <div className={styles.logo}>
          <h2 className={styles.logoHeader}>
            App<span>Lab</span>
          </h2>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Key Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testiminial">Testiminial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
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
