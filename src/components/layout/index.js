import React, { useState } from "react"

import Navbar from "../navbar"
import Footer from "../footer"
import Sidebar from "../sidebar"
import styles from "./layout.module.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
