import React from "react";
import styles from "./DesignedBuilt.module.css";
import designedBuilt from "../../assets/designedBuilt.png";
import { CustomButton } from "../CustomButton/CustomButton";

export const DesignedBuilt = () => {
  return (
    <section className={styles.builtContainer}>
      <div className={styles.imageContainer}>
        <img src={designedBuilt} alt="" className={styles.image} />
      </div>
      <div className={styles.builtDescription}>
        <h2 className={styles.builtHeading}>
          Designed & build by the latest code integration
        </h2>
        <h4 className={styles.builtParagraph}>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook
        </h4>
        <CustomButton title={"Learn more"}></CustomButton>
      </div>
    </section>
  );
};
