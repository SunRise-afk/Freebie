import React from "react";
import styles from "./ClientComments.module.css";
import clientCommentMap from "../../assets/clientCommentMap.png";
import clientCommentAuthor from "../../assets/clientCommentAuthor.png";

export const ClientComments = () => {
  return (
    <section className={styles.clientCommentsContainer} id="testiminial">
      <div className={styles.commentsCol}>
        <img src={clientCommentMap} alt="" className={styles.commentsImage} />
      </div>
      <div className={styles.commentsCol}>
        <h1 className={styles.commentsHeading}>
          Meet Client Satisfaction by using product
        </h1>
        <h4 className={styles.commentsDescription}>
          The rise of mobile devices transforms the way we consume information
          such as Facebook
        </h4>
        <div className={styles.commentStars}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h2 className={styles.commentsSubHeading}>
          User friendly & Customizable
        </h2>
        <h4 className={styles.comment}>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring.
        </h4>
        <div className={styles.authorRow}>
          <div className={styles.author}>
            <div className={styles.authorImage}>
              <img src={clientCommentAuthor} alt="" />
            </div>
            <div className={styles.authorInfo}>
              <h2 className={styles.authorName}>Zoltan Nemeth</h2>
              <h4 className={styles.authorStatus}>CEO of Pixler Lab</h4>
            </div>
          </div>
          <div className={styles.commentSwitchButtons}>
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
