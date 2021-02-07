import React from "react"

import Footer from "../components/footer"
import SEO from "../components/seo"
import CodeInfo from "../components/codeInfo"
import Paypal from "../components/paypal"

const CheckOut = () => (
  <>
    <SEO title="Contact Us" />
    <CodeInfo />
    <Paypal />
    <Footer fixed={true} />
  </>
)

export default CheckOut
