import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="FOR SALE" keywords={[`gatsby`, `application`, `react`]} />
    <div id="boxtime">
      <div>
        <h1>FOR SALE</h1>
      </div>
      <div>
        <a href="mailto:contact@boxtime.se">contact@boxtime.se</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
