import React from "react"
import styles from "./navbar.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  FaCheck,
  FaSortNumericDown,
  FaCarAlt,
  FaPhone,
  FaImage,
  FaAlignRight,
} from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button onClick={() => scrollTo("#code")}>
            <FaCheck />
            <p className={styles.navText}>Get Code</p>
          </button>
        </li>

        <li>
          <button onClick={() => scrollTo("#serial")}>
            <FaSortNumericDown />
            <p className={styles.navText}>Find Serial</p>
          </button>
        </li>

        <li>
          <button onClick={() => scrollTo("#enter")}>
            <FaCarAlt />
            <p className={styles.navText}>How to Enter</p>
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo("#images")}>
            <FaImage />
            <p className={styles.navText}>Images</p>
          </button>
        </li>
        <li>
          <button onClick={() => scrollTo("#contact")}>
            <FaPhone />
            <p className={styles.navText}>Contact Us</p>
          </button>
        </li>
      </ul>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        <FaAlignRight />
      </button>
    </nav>
  )
}

export default Navbar
