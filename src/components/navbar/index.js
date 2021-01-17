import React from "react"
import styles from "./navbar.module.css"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button onClick={() => scrollTo("#serial")}>Find Serial</button>
        </li>

        <li>
          <button onClick={() => scrollTo("#enter")}>How to Enter</button>
        </li>
        <li>
          <button onClick={() => scrollTo("#faq")}>FAQ</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
