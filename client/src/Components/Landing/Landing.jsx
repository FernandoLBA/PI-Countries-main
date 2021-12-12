import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
         <h1>TRAVEL THE WORLD</h1>
      <div className={styles.hero}>
        <button onClick={() => (window.location.href = "/home")}>
          Let's Explore
        </button>
      </div>
    </div>
  );
};

export default Landing;
