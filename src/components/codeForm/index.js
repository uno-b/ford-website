import React from "react"

import styles from "./codeForm.module.css"

const Form = () => (
  <>
    <form action="" method="POST">
      <div className={styles.formGroup}>
        <h1>Enter your email:</h1>
        <input type="email" name="email" placeholder="Email" />
        <input type="serial" name="serial" placeholder="Serial" />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </div>
    </form>
  </>
)

export default Form
