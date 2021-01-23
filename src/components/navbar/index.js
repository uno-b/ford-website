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
          <button aria-label="Code" onClick={() => scrollTo("#code")}>
            <FaCheck />
            <p className={styles.navText}>Get Code</p>
          </button>
        </li>

        <li>
          <button aria-label="Serial" onClick={() => scrollTo("#serial")}>
            <FaSortNumericDown />
            <p className={styles.navText}>Find Serial</p>
          </button>
        </li>

        <li>
          <button aria-label="Enter" onClick={() => scrollTo("#enter")}>
            <FaCarAlt />
            <p className={styles.navText}>How to Enter</p>
          </button>
        </li>
        <li>
          <button aria-label="Images" onClick={() => scrollTo("#images")}>
            <FaImage />
            <p className={styles.navText}>Images</p>
          </button>
        </li>
        <li>
          <button aria-label="Contact" onClick={() => scrollTo("#contact")}>
            <FaPhone />
            <p className={styles.navText}>Contact Us</p>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
