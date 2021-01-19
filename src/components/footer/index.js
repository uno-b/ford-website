import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div>
        <h5>
          In-case of any issues do send us a mail on our email id –
          sales@druvainfotech.com for further assistance.{" "}
        </h5>
        <h5>Copyright &copy; {new Date().getFullYear()}</h5>
      </div>
    </footer>
  )
}

export default Footer
