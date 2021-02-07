import React from "react"
import styles from "./footer.module.css"

const Footer = ({ fixed }) => {
  return (
    <footer
      className={`${styles.footer} ${fixed ? styles.fixed : ""}`}
      id="contact"
    >
      <div>
        <h5>
          In-case of any issues do send us a mail on our email id –
          <a className={styles.email} href="mailto:sales@druvainfotech.com">
            sales@druvainfotech.com
          </a>{" "}
          for further assistance.{" "}
        </h5>
        <h5>Copyright &copy; {new Date().getFullYear()}</h5>
      </div>
    </footer>
  )
}

export default Footer
