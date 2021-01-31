import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./main.module.css"
import img1 from "../../images/code-1.webp"
import img2 from "../../images/code-2.webp"
import img3 from "../../images/code-3.webp"
import { navigate } from "gatsby"

const Why = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [serial, setSerial] = useState("")
  const data = useStaticQuery(graphql`
    {
      allFordMXlsxSheet1 {
        nodes {
          Radio_Serial_Number
          Unlock_Code
        }
      }
      allFordVXlsxSheet1 {
        nodes {
          Radio_Serial_Number
          Unlock_Code
        }
      }
    }
  `)

  const codes = new Map()
  data.allFordMXlsxSheet1.nodes.map(
    node => (codes[node.Radio_Serial_Number] = node.Unlock_Code)
  )
  data.allFordVXlsxSheet1.nodes.map(
    node => (codes[node.Radio_Serial_Number] = node.Unlock_Code)
  )

  const checkValidity = () => {
    if (serial in codes) {
      setIsInvalid(false)
      navigate("/checkout")
    } else {
      setIsInvalid(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="code" />
      <h1>Get Radio Code</h1>
      <div className={styles.codeContainer}>
        <label htmlFor="serial-input">Enter Serial:</label>
        <input
          id="serial-input"
          type="text"
          value={serial}
          placeholder="Example: V123456 or M123456"
          onInput={e => setSerial(e.target.value)}
        />
        <button onClick={checkValidity}>Click to Get Unlock Code</button>
        {isInvalid && <p className={styles.error}>Not found.</p>}
      </div>
      <div className={styles.imageRow}>
        <img src={img1} alt="Example 1" />
        <img src={img2} alt="Example 2" />
        <img src={img3} alt="Example 3" />
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
