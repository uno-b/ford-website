import React from "react"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import Cover from "../components/cover"
import Serial from "../components/serial"
import Enter from "../components/enter"
import Faq from "../components/faq"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <Serial />
    <Enter />
    <Faq />
  </Layout>
)

export default IndexPage
