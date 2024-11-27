import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const aboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
      <p>This is the content of the About Us!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />
export default aboutPage;