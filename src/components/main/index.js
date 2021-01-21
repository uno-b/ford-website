import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./main.module.css"
import img1 from "../../images/code-1.jpg"
import img2 from "../../images/code-2.jpg"
import img3 from "../../images/code-3.jpg"
import img4 from "../../images/code-4.jpg"

const Why = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allFordMXlsxSheet1 {
        edges {
          node {
            Radio_Serial_Number
            Unlock_Code
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="code" />
      <h1>Get Radio Code</h1>
      <div className={styles.codeContainer}>
        <p>Enter the serial below:</p>
        <input type="text" placeholder="Example: V123456 or M123456" />
        <button>Find</button>
        {isInvalid && <p className={styles.error}>Not found.</p>}
      </div>
      <div styles={styles.imageRow}>
        <img src={img1} className={styles.galleryImage} />
        <img src={img2} className={styles.galleryImage} />
      </div>
      <div styles={styles.imageRow}>
        <img src={img3} className={styles.galleryImage} />
        <img src={img4} className={styles.galleryImage} />
      </div>
      <p>
        Unlock codes for Ford Escort, Fiesta, Focus, Mondeo, Galaxy, C-Max,
        Tourneo and Transit ETC Radios.
      </p>
      <p>The serial number starts with the letter M or V.</p>
      <p>Your serial will be a letter followed by 6 numbers.</p>
      <p>Example: M123456 or V123456.</p>
      <p>
        Now it is easy to get the 4 digit Unlock Code that you need for your
        Ford Car Stereo / Radio.
      </p>
      <h2>Why do I need a radio code?</h2>
      <ul>
        <li>
          If you have lost your Ford M & V Serial car radio unlock code and
          don't have the original document's you would require this code to
          unlock your radio.
        </li>
        <li>
          A Radio code is designed to prevent the theft of your Stereo / Radio
          often when the power is disconnected from the stereo the sensors
          detects this event as that it has been taken out or robbed.
        </li>
        <li>
          99% of the time this is due to a battery disconnect with mechanics or
          maintenance reasons when the power is disconnected to your radio it
          will go into factory default setting and require it's own unique 4
          digit pin that it was programmed with at manufacture.
        </li>
        <li>
          Now you can get unlock codes for Sony All Visteon and Sony units with
          V serial number can be unlocked easily such as 6000CD, 4500RDS,
          6006CDC and others.
        </li>
        <li>
          Your serial number must start with the letter M or V followed by 6
          numbers (example: V123456 / M123456 )
        </li>
      </ul>
      <h2>Model Supported</h2>
      <p>
        We can provide the Unlock Code for Stereos / Radios found in Ford
        Escort, Ford Fiesta, Ford Focus, Ford Mondeo and Ford Transit models.
      </p>
      <ul>
        <li>Ford 3000</li>
        <li>Ford 4000</li>
        <li>Ford 4500</li>
        <li>Ford 5000</li>
        <li>Ford 6000</li>
      </ul>
    </div>
  )
}

export default Why
