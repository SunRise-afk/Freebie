import React from "react";
import styles from "./Advantages.module.css";
import advantageWebDesign from "../../assets/advantageWebDesign.png";
import advantageComputer from "../../assets/advantageComputer.png";
import advantageCustomerService from "../../assets/advantageCustomerService.png";
import advantageCustomerSupport from "../../assets/advantageCustomerSupport.png";
import advantageTrophy from "../../assets/advantageTrophy.png";
import advantageUI from "../../assets/advantageUI.png";
import { FeaturesListItem } from "../Features/FeaturesListItem";

export const Advantages = () => {
  return (
    <section className={styles.advantagesContainer}>
      <div className={styles.advantagesHeader}>
        <h1 className={styles.advantagesHeading}>
          Why you should choose our app
        </h1>
        <h4 className={styles.advantagesParagraph}>
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook
        </h4>
      </div>
      <div className={styles.advantagesRow}>
        <FeaturesListItem
          title="App Development"
          icon={advantageWebDesign}
          iconColor={"#ffecef"}
          titleColor={"#000"}
          isCenteredSelf={true}
        ></FeaturesListItem>
        <FeaturesListItem
          title="10 Times Award"
          icon={advantageTrophy}
          iconColor={"#eaf9ff"}
          titleColor={"#000"}
          isCenteredSelf={true}
        ></FeaturesListItem>
        <FeaturesListItem
          title="Cloud Storage"
          icon={advantageComputer}
          iconColor={"#fff6d3"}
          titleColor={"#000"}
          isCenteredSelf={true}
        ></FeaturesListItem>
      </div>
      <div className={styles.advantagesRow}>
        <FeaturesListItem
          title="Customization"
          icon={advantageCustomerService}
          iconColor={"#e4ffee"}
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
        <FeaturesListItem
          title="Customer Support"
          icon={advantageCustomerSupport}
          iconColor={"#fdeee4"}
          titleColor={"#000"}
          isCenteredSelf={true}
        ></FeaturesListItem>
      </div>
    </section>
  );
};
