import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <p>This is the content of the Homepage!</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage