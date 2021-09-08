import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Info from '@solid-ui-blocks/Hero/Block02'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='4' />
      <Divider space='4' />
      <Divider space='4' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Hero content={content['hero']} reverse />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['info']} />
      <Divider space='5' />
      <Download content={content['download']} />
      <Divider space='5' />
      <Info content={content['presentations']} />
      <Divider space='5' />
      <Divider space='5' />
      <Blog content={content['latest-blogs']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteIndexBlockContent {
    allBlockContent(filter: { page: { in: ["site/index", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
