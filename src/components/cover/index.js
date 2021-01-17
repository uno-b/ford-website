import React from "react"
import Image from "../image"
import styles from "./cover.module.css"

const Cover = () => {
  return (
    <>
      <div className={styles.cover}>
        <Image />
        <div className={styles.container}>
          <h1>Ford Car Radio Codes</h1>
          <p>Have your Ford serial number already?</p>
          <button>Get Ford Code!</button>
        </div>
      </div>
    </>
  )
}

export default Cover
