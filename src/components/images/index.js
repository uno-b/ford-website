import React from "react"
import styles from "./images.module.css"
import img1 from "../../images/gallery-1.jpg"
import img2 from "../../images/gallery-2.jpg"
import img3 from "../../images/gallery-3.jpg"
import img4 from "../../images/gallery-4.jpg"
import img5 from "../../images/gallery-5.jpg"
import img6 from "../../images/gallery-6.jpg"
import img7 from "../../images/gallery-7.jpg"
import img8 from "../../images/gallery-8.jpg"
import img9 from "../../images/gallery-9.jpg"

const Images = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="images" />
      <h1>Image Gallery</h1>

      <div className={styles.imageRow}>
        <img src={img1} className={styles.image} alt="Example Radio" />
        <img src={img2} className={styles.image} alt="Example Radio" />
        <img src={img3} className={styles.image} alt="Example Radio" />
      </div>
      <div className={styles.imageRow}>
        <img src={img4} className={styles.image} alt="Example Radio" />
        <img src={img5} className={styles.image} alt="Example Radio" />
        <img src={img6} className={styles.image} alt="Example Radio" />
      </div>
      <div className={styles.imageRow}></div>
      <div className={styles.imageRow}>
        <img src={img7} className={styles.image} alt="Example Radio" />
        <img src={img8} className={styles.image} alt="Example Radio" />
        <img src={img9} className={styles.image} alt="Example Radio" />
      </div>
    </div>
  )
}

export default Images
