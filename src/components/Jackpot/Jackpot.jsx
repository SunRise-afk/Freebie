import React from "react";
import { FeaturesListItem } from "../Features/FeaturesListItem";
import styles from "./Jackpot.module.css";
import featuresBill from "../../assets/featuresBill.png";
import featuresNetwork from "../../assets/featuresNetwork.png";
import featuresBadge from "../../assets/featuresBadge.png";

export const Jackpot = () => {
  return (
    <section className={styles.jackpotContainer}>
      <div className={styles.jackpotRow}>
        <h1 className={styles.jackpotHeading}>
          Smart jackpots that you may love this anytime & anywhere
        </h1>
        <h4 className={styles.jackpotParagraph}>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook
        </h4>
      </div>
      <div className={styles.jackpotRow}>
        <FeaturesListItem
          title={"Automatic Payouts"}
          icon={featuresBill}
          iconColor={"#ffecef"}
          titleColor={"#f55767"}
          isCenteredSelf={true}
        ></FeaturesListItem>
        <FeaturesListItem
          title={"Network Effect"}
          icon={featuresNetwork}
          iconColor={"#f4f4ff"}
          titleColor={"#2563ff"}
          isCenteredSelf={true}
        ></FeaturesListItem>
        <FeaturesListItem
          title={"Bigger Rewards Method"}
          icon={featuresBadge}
          iconColor={"#e4ffee"}
          titleColor={"#40975f"}
          isCenteredSelf={true}
        ></FeaturesListItem>
      </div>
    </section>
  );
};
