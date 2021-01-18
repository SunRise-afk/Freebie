import React from "react";
import styles from "./Download.module.css";
import footerImage from "../../assets/footerImage.png";
import footerGooglePlay from "../../assets/footerGooglePlay.png";
import footerAppleStore from "../../assets/footerAppleStore.png";

export const Download = () => {
  return (
    <section className={styles.download}>
      <div className={styles.downloadContainer}>
        <div className={styles.downloadCol}>
          <h1 className={styles.footerHeading}>Download our App now!</h1>
          <h4 className={styles.footerDescription}>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </h4>
          <div className={styles.storesContainer}>
            <img src={footerGooglePlay} alt="" />
            <img src={footerAppleStore} alt="" />
          </div>
        </div>
        <div className={styles.downloadCol}>
          <div className={styles.imageContainer}>
            <img src={footerImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
