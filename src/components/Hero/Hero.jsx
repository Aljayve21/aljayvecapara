import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils/utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aljayve Capara</h1>
        <p className={styles.description}>
          
I am a graduating student with a dream of becoming a full-stack developer. To achieve this, I am studying and practicing system development. Here are some of the systems I have created.
        </p>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
