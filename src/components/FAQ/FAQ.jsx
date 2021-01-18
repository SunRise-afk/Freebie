import React from "react";
import styles from "./FAQ.module.css";
import { FaqItem } from "./FaqItem";

export const FAQ = () => {
  return (
    <section className={styles.faq} id="faq">
      <h1 className={styles.faqHeading}>Frequently asked question</h1>
      <h4 className={styles.faqDescription}>
        The rise of mobile devices transforms the way we consume information
        entirely and the world's most elevant channels such as Facebook.
      </h4>
      <FaqItem title="How to contact with riders emergency?"></FaqItem>
      <FaqItem title="App installation failed, how to update system information?"></FaqItem>
      <FaqItem title="Website reponse taking time, how to improve?"></FaqItem>
      <FaqItem title="New update fixed all bug and issues"></FaqItem>
      <FaqItem title="How to contact with riders emergency?"></FaqItem>
    </section>
  );
};
