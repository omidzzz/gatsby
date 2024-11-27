import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <p>This is the content of the Homepage!</p>
      <StaticImage src='../images/Mastodon.png' alt='Picsum' />
    </Layout>
  )
}

export const Head = () => <Seo title='Home Page' />

export default IndexPage