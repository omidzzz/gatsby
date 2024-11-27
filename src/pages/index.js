import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <p>This is the content of the Homepage!</p>
      <StaticImage src='../images/Mastodon.png' alt='Picsum' />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage