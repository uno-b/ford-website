import React from "react"

import styles from "./paypal.module.css"

const Paypal = () => {
  return (
    <div className={styles.paypalWrapper}>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="RNLZEE62PCN7J" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif"
          border="0"
          name="submit"
          alt="PayPal – The safer, easier way to pay online!"
        />
      </form>
    </div>
  )
}

export default Paypal
