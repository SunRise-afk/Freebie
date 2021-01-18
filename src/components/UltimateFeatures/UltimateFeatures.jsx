import React from "react";
import { FeaturesListItem } from "../Features/FeaturesListItem";
import { CustomButton } from "../CustomButton/CustomButton";
import styles from "./UltimateFeatures.module.css";
import UFPhoneBack from "../../assets/UFPhoneBack.png";
import UFPhoneFront from "../../assets/UFPhoneFront.png";
import advantageWebDesign from "../../assets/advantageWebDesign.png";
import advantageComputer from "../../assets/advantageComputer.png";
import advantageCustomerSupport from "../../assets/advantageCustomerSupport.png";
import advantageUI from "../../assets/advantageUI.png";

export const UltimateFeatures = () => {
  return (
    <section className={styles.container}>
      <div className={styles.featuresCol}>
        <h1 className={styles.featuresHeading}>
          Ultimate features that we built
        </h1>
        <h4 className={styles.featuresParagraph}>
          The rise of mobile devices transforms the way we consume information
          entirely.
        </h4>
        <div className={styles.featuresRow}>
          <FeaturesListItem
            title="App Development"
            icon={advantageWebDesign}
            iconColor={"#ffecef"}
            titleColor={"#000"}
            isCenteredSelf={true}
          ></FeaturesListItem>
          <FeaturesListItem
            title="UX Planning"
            icon={advantageUI}
            iconColor={"#f4f4ff"}
            titleColor={"#000"}
            isCenteredSelf={true}
          ></FeaturesListItem>
        </div>
        <div className={styles.featuresRow}>
          <FeaturesListItem
            title="Cloud Storage"
            icon={advantageComputer}
            iconColor={"#fff6d3"}
            titleColor={"#000"}
            isCenteredSelf={true}
          ></FeaturesListItem>
          <FeaturesListItem
            title="Customer Support"
            icon={advantageCustomerSupport}
            iconColor={"#fdeee4"}
            titleColor={"#000"}
            isCenteredSelf={true}
          ></FeaturesListItem>
        </div>
        <div className={styles.button}>
          <CustomButton title="See all"></CustomButton>
        </div>
      </div>
      <div className={styles.featuresCol}>
        <div className={styles.phonesContainer}>
          <img src={UFPhoneBack} alt="" className={styles.phoneBack} />
          <img src={UFPhoneFront} alt="" className={styles.phoneFront} />
        </div>
      </div>
    </section>
  );
};
