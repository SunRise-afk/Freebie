import React from "react";
import styles from "./Features.module.css";

export const FeaturesListItem = ({
  title,
  icon,
  iconColor,
  titleColor,
  isCenteredSelf,
}) => {
  return (
    <div
      className={`${styles.itemContainer} ${
        isCenteredSelf ? styles.centered : ""
      }`}
    >
      <div
        className={`${styles.itemIconCotaniner}`}
        style={{ backgroundColor: `${iconColor}` }}
      >
        <img src={icon} alt="" />
      </div>
      <div className={styles.itemDescriptionContainer}>
        <h3 className={styles.itemHeading} style={{ color: titleColor }}>
          {title}
        </h3>
        <h4 className={styles.itemDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          praesentium. Optio fugiat molestias vel ut?
        </h4>
      </div>
    </div>
  );
};
