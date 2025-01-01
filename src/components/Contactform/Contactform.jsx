import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contactform.module.css";

export const Contactform = () => {
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
    <section className={styles.container}>
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
    </section>
  );
};
