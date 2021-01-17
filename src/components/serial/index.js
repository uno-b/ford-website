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
      <p>Getting your car radio code has never been easier!</p>
      <p>
        Using buttons 1 & 6 applies to the following radios,6000CD, 4500RDS,
        6006CDC & Sony.
      </p>
      <ul>
        <li>Press and hold buttons 1 & 6 together.</li>
        <li>
          The radio will go through a series of information on the display, the
          ONLY information that will be your serial will begin "M" or "V"
          followed by 6 digits.
        </li>
        <li>
          If nothing shows doing this move onto the next step, this is pressing
          and holding down buttons 2 & 6.
        </li>
        <li>
          Using this method the radio will show the serial number beginning "M"
          and six number or will show nothing on screen.
        </li>
        <li>In the case that nothing happens, move onto (method 2).</li>
        <img src={serial1} />
      </ul>
      <h2>Getting the serial to display on-screen</h2>
      <p>
        Hold down the pre-set buttons 1 & 6 until the stereo cycles through
        different information.
      </p>
      <p>
        Various different info will be displayed, the serial number will only
        begin "V" followed by six digits.
      </p>
      <p>
        Your serial will begin with "V" as shown in the example image. Example:
        V187398.
        <img src={serial2} />
      </p>
      <h2>How To Get Your Ford Sony Serial</h2>
      <p>Hold down the pre-set buttons 1 & 6 for 2 - 5 seconds.</p>
      <p>The radio will cycle through different displays of information.</p>
      <p>
        The serial number will begin with "SO" or "SN", using the last 7 your
        serial will begin with "V" as shown in the example image. Example:
        V015076
      </p>
      <img src={serial3} />
      <h2>How To Get Your Ford 6000CD Serial</h2>
      <p>
        Hold down the pre-set buttons 1 & 6 until the stereo cycles through
        different information.
      </p>
      <p>
        Various different info will be displayed, the serial number will only
        begin "V" followed by six digits.
      </p>
      <p>
        Your serial will begin with "V" as shown in the example image. Example:
        V187398.
      </p>
      <img src={serial4} />
      <h2>Getting your serial number from the radios label</h2>
      <p>
        The next step which guarantees getting the serial number for your ford
        radio is to removed the unit.
      </p>
      <p>
        This is very simple and 90% of radios just require the use of radio
        release keys which free the radio to be pulled forwards.
      </p>
      <p>
        If your radio does not have the pre-drilled holes in each corner, simply
        remove the outer trim surrounding the radio unit & 4 screws will be
        holding the radio in place.
      </p>
      <p>
        The serial number will be printed on the label clearly and will begining
        with M or V followed by 6 digits.
      </p>
      <img src={serial5} />
      <h2>Ford M and V Radio Codes</h2>
      <p>
        We unlock both Ford V & Ford M radio codes instantly, simply enter your
        ford serial number and your radio decode will display instantly.
      </p>
      <p>
        M & V serial numbers cover 95% of ford radios commonly in the Transit,
        Focus, Fiesta & KA radios have these serial numbers.
      </p>
    </div>
  )
}

export default Serial
