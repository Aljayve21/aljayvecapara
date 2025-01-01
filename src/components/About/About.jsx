import React from "react";

import styles from "./About.module.css";

import { getImageUrl } from "../../utils/utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/AljayveCapara.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              When it comes to front-end development, I am not yet very experienced, but I am eager to learn more in order to improve my skills in this area.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")}  alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              When it comes to back-end development, I am not yet very experienced, but I am willing to learn more in order to improve my skills. I prefer solving problems and being challenged in terms of coding.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")}  alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              As for UI design, I am still continuously learning and I also search online for design ideas to further improve the quality of my work.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
