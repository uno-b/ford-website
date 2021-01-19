import React from "react"
import styles from "./navbar.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  FaCheck,
  FaSortNumericDown,
  FaCarAlt,
  FaPhone,
  FaImage,
} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button onClick={() => scrollTo("#code")}>
            <FaCheck />
            Get Code
          </button>
        </li>

        <li>
          <button onClick={() => scrollTo("#serial")}>
            <FaSortNumericDown />
            Find Serial
          </button>
        </li>

        <li>
          <button onClick={() => scrollTo("#enter")}>
            <FaCarAlt />
            How to Enter
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo("#images")}>
            <FaImage />
            Images
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo("#contact")}>
            <FaPhone />
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
