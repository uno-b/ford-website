import React from "react"
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contactForm}>
          <h1>Get in touch</h1>
          <form action="https://formspree.io/" method="POST">
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="name"
                className={styles.formControl}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className={styles.formControl}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className={styles.formControl}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit Here
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
