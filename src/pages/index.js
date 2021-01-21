import React from "react"

import Layout from "../components/layout/"
import SEO from "../components/seo"
import Cover from "../components/cover"
import Main from "../components/main"
import Serial from "../components/serial"
import Enter from "../components/enter"
import Notes from "../components/note"
import Images from "../components/images"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cover />
    <Main />
    <Serial />
    <Enter />
    <Notes />
    <Images />
  </Layout>
)

export default IndexPage
