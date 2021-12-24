import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block06'
import Features from '@solid-ui-blocks/Features/Block02'
import Silver from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Presentations from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import WhyChooseUs from '@solid-ui-blocks/Features/Block01'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import WithRecentPosts from '@solid-ui-blocks/WithRecentPosts'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Hero content={content['hero']} reverse />
      </Container>
      <Divider space='4' />
      <Features content={content['features']} />
      <Divider space='4' />
      <Silver content={content['silver']} /> 
      <Divider space='4' />
      <Info content={content['info']} />
      <Divider space='4' />
      <WithRecentPosts>
        <Blog content={content['latest-blogs']} />
      </WithRecentPosts>
      <Divider space='4' />
      <Presentations content={content['presentations']} />
      <Divider space='5' />
      <WhyChooseUs content={content['why-choose-us']} />
      <Download content={content['download']} />
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
