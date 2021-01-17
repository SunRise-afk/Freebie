import React from "react";
import styles from "./TrustedCompanies.module.css";
import trusted1 from "../../assets/trusted1.png";
import trusted2 from "../../assets/trusted2.png";
import trusted3 from "../../assets/trusted3.png";
import trusted4 from "../../assets/trusted4.png";
import trusted5 from "../../assets/trusted5.png";

export const TrustedCompanies = () => {
  return (
    <section className={styles.trustedContainer}>
      <h4>Trusted by companies like</h4>
      <div className={styles.companiesContainer}>
        <img src={trusted1} alt="" />
        <img src={trusted2} alt="" />
        <img src={trusted3} alt="" />
        <img src={trusted4} alt="" />
        <img src={trusted5} alt="" />
      </div>
    </section>
  );
};
