import React from "react"
import styles from "./serial.module.css"
import serial1 from "../../images/serial-1.jpg"
import serial2 from "../../images/serial-2.png"
import serial3 from "../../images/serial-3.png"
import serial4 from "../../images/serial-4.png"
import serial5 from "../../images/serial-5.jpg"

const Serial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="serial" />
      <h1>How to get your serial code?</h1>
      <ul>
        <li>Press and hold buttons 1 & 6 together.</li>
        <li>
          You will get to see a series of information on the display of your
          Radio / Stereo, the information what we require will be a Serial
          Number starting with "V" followed by 6 digits number.
        </li>
        <li>
          On pressing on 1 & 6 together if nothing shows up on the display try
          with this alternative method i.e. by pressing and holding down buttons
          2 & 6.
        </li>
        <li>You can find that number on the label on the top of your unit.</li>
        <li>
          Or without removing unit just press and hold buttons 6 and 1 on radio
          until the V number displays
        </li>
      </ul>
    </div>
  )
}

export default Serial
