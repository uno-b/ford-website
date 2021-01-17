import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>Copyright &copy; {new Date().getFullYear()}</h4>
      </div>
    </footer>
  )
}

export default Footer
