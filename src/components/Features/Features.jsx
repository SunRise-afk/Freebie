import React from "react";
import styles from "./Features.module.css";
import featuresPhone from "../../assets/featuresPhone.png";
import { FeaturesListItem } from "./FeaturesListItem";
import featuresSpeed from "../../assets/featuresSpeed.png";
import featuresPrototyping from "../../assets/featuresPrototyping.png";
import featuresVector from "../../assets/featuresVector.png";

export const Features = () => {
  return (
    <section className={styles.featuresContainer} id='features'>
      <div className={styles.imageContainer}>
        <img src={featuresPhone} alt="" className={styles.featuresPhone} />
      </div>
      <div className={styles.featuresDescriptionContainer}>
        <h2 className={styles.featuresHeading}>Awesome apps features</h2>
        <h4>
          Increase productivity with a simple to-do app, app for managing your
          personal budgets
        </h4>
        <div className={styles.DescriptionList}>
          <FeaturesListItem
            title={"Fast Perfomance"}
            icon={featuresSpeed}
            iconColor={"#ffecef"}
            titleColor={"#f55767"}
            isCenteredSelf={false}
          ></FeaturesListItem>
          <FeaturesListItem
            title={"Prototyping"}
            icon={featuresPrototyping}
            iconColor={"#f4f4ff"}
            titleColor={"#2563ff"}
            isCenteredSelf={false}
          ></FeaturesListItem>
          <FeaturesListItem
            title={"Vector Editing"}
            icon={featuresVector}
            iconColor={"#e4ffee"}
            titleColor={"#40975f"}
            isCenteredSelf={false}
          ></FeaturesListItem>
        </div>
      </div>
    </section>
  );
};
