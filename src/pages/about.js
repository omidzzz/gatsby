import * as React from 'react'
import Layout from '../components/layout'

const aboutPage = () => {
  return (
    <Layout pageTitle={"About Us"}>
      <p>This is the content of the About Us!</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About Us</title>
    <meta name='description' content='This is a Description' />
  </>
)

export default aboutPage;