import React from "react"
import styles from "./navbar.module.css"
import { FaHome, FaPhoneAlt } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button>
            <FaHome /> Home
          </button>
        </li>
        <li>
          <button>
            <FaPhoneAlt /> Get Code
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
