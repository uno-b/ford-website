import React from "react"
import styles from "./enter.module.css"
import img1 from "../../images/enter-1.jpg"
import img2 from "../../images/enter-2.jpg"

const Enter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="enter" />
      <h1>How to enter?</h1>
      <div className={styles.image}>
        <img src={img1} />
      </div>
      <p>
        To enter the code just repeatedly press button 1 until the correct first
        digit of the code is shown then do the same with number 2, 3 and 4 –
        Please follow the entry pattern mentioned below.
      </p>
      <p>Or with the newest unit just type correct numbers.</p>
      <p>After that just press button no. 5 or * to enter/confirm.</p>
      <h2>Code Entry Pattern</h2>
      <ul>
        <li>Press 1 repeatedly for the first digit of your code.</li>
        <li>Press 2 repeatedly for the second digit of your code.</li>
        <li>Press 3 repeatedly for the third digit of your code.</li>
        <li>Press 4 repeatedly for the fourth digit of your code.</li>
        <li>
          Cross check once the code you have entered is the correct as per the
          unlock code for your radio which is showing on the display now.
        </li>
        <li>
          Now press & hold the number 5 button until you hear an Confirmation
          Beep.
        </li>
      </ul>
      <div className={styles.image}>
        <img src={img2} />
      </div>
    </div>
  )
}

export default Enter
