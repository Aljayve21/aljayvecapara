import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils/utils";
import emailjs from "emailjs-com"; // Ensure emailjs-com is imported

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mncow44", // Replace with your EmailJS service ID
        "template_1de97sg", // Replace with your EmailJS template ID
        formData,
        "_J4EJ5aTNzlop0pWI" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Email sending failed", error);
        }
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactFormContainer}>
        {isSent ? (
          <div className={styles.successMessage}>Message Sent Successfully!</div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>You have a Question? Please Contact Me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn Icon"
          />
          <a href="https://www.linkedin.com/in/aljayve-capara-398185260/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github Icon"
          />
          <a href="https://wwww.github.com/Aljayve21">Github</a>
        </li>
      </ul>
    </footer>
  );
};
