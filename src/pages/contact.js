import React from "react"

import Navbar from "../components/contact-navbar"
import Contact from "../components/contact"
import SEO from "../components/seo"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Contact Us" />
    <Navbar />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
