import React from "react"
import enter1 from "../../images/enter-1.jpg"
import styles from "./enter.module.css"

const Enter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="enter" />
      <h1>How to enter?</h1>
      <p>
        Enter the radio code when you see four horizontal lines on the display
        screen. If you see the word wait, you need to leave the radio switched
        on for up to 1 hour this will allow the radio to reset.
      </p>
      <p>
        If Lock 10 is on-screen just press and hold the preset button 6 whilst
        turning the radio on this will give you 3 final attempts to enter the
        correct code.
      </p>
      <p>
        If your radio is displays Locked 13 then the code will be of no use as
        this radio would need to be manually decoded.
      </p>
      <h2>Example of code input:</h2>
      <ul>
        <li>Press 1 repeatedly for the first digit of your code.</li>
        <li>Press 2 repeatedly for the second digit of your code.</li>
        <li>Press 3 repeatedly for the third digit of your code.</li>
        <li>Press 4 repeatedly for the fourth digit of your code.</li>
        <li>Once your radio code is showing on the display</li>
        <li>
          press & hold the number 5 button until you hear an confirmation beep.
        </li>
        <img src={enter1} />
      </ul>
    </div>
  )
}

export default Enter
