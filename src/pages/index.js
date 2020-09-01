import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from 'react-bootstrap/Button';
import './App.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi ya'll</h1>
    <p>This is Jodie trying to get Gatsby to work.</p>
    <p>Now go build something great.</p>
    <Button variant="primary">Hello I'm a button</Button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
