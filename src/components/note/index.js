import React from "react"
import styles from "./note.module.css"

const Note = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anchor} />
      <h1>Note</h1>
      <div className={styles.wrapper}>
        <p>
          Enter the radio code when you see four horizontal lines on the display
          screen. If you see the word wait, you need to leave the radio switched
          on for up to 1 hour this will allow the radio to reset.
        </p>
        <p>
          If “LOCKED 10 / LOCK 10” is being displayed on the screen just press
          and hold the preset button “6” whilst turning the radio on this method
          it will give you 3 more final attempts to enter the correct code for
          your radio.
        </p>
        <p>
          If your radio displays a message on the display as “LOCKED 13 / LOCK
          13” then this unlock code will be of no use to you as this radio need
          to be manually decoded through a Ford Dealership or through the repair
          centre.
        </p>
      </div>
    </div>
  )
}

export default Note
