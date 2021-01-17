import React from "react"
import styles from "./faq.module.css"

const Faq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.anchor} id="faq" />
      <h1>FAQ</h1>
      <div className={styles.wrapper}>
        <h2>Q: My serial does not begin M or V.</h2>
        <p>
          90% of ford radio serial numbers begin M or V. If the serial does not
          display upon holding the pre-set buttons on the unit, the stereo must
          be taken out. Once the radio is removed from the dash, the serial
          number Is always printed on the sticker label on the back.
        </p>
      </div>
      <div className={styles.wrapper}>
        <h2>Q: Removing Ford Radio</h2>
        <p>
          This may seem confusing but taking your radio out is really easy and
          requires little to no DIY skills. First you will need radio release
          keys for most models, others need the outer trim removing and there
          are 4 screws holding the radio in place.
        </p>
      </div>
      <div className={styles.wrapper}>
        <h2>Q: Ford radio locked</h2>
        <p>
          If “LOCKED 13” is showing on the display, the incorrect decode has
          been entered too many times and the system has completely locked. If
          this is the case the only options are to go directly to a Ford
          dealership or to replace the unit itself with another one.
        </p>
      </div>
      <div className={styles.wrapper}>
        <h2>Q: Why do I need a radio code?</h2>
        <p>
          A radio code is designed to prevent theft and when the power is
          disconnected from the stereo, its sensors show that it has been taken
          out or robbed. 99% of the time this is due to a battery disconnect
          with mechanics or maintenance reasons.
        </p>
      </div>
    </div>
  )
}

export default Faq
