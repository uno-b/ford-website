import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import Image from "../image"
import styles from "./cover.module.css"

const Cover = () => {
  return (
    <>
      <div className={styles.cover}>
        <Image />
        <div className={styles.container}>
          <h1>Get Ford M & V Serial Radio Unlock Code Instantly</h1>
          <p>!!! 1 USD Per Code !!!</p>
          <button onClick={() => scrollTo("#code")}>Get Ford Code!</button>
        </div>
      </div>
    </>
  )
}

export default Cover
