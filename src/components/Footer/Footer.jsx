import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContainer}>
        <div className={styles.logo}>
          <h2 className={styles.logoHeader}>
            App<span>Lab</span>
          </h2>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Key Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testiminial">Testiminial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
        <ul className={styles.footerSocials}>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fas fa-hashtag"></i>
          </li>
          <li>
            <a
              href="https://github.com/SunRise-afk"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
