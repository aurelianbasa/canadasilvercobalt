import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Quote from '../../blocks/Quotes/Block01'
import ContentOne from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import ContentTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutEnvironmentPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='About' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container>
        <Card variant='paper-lg' sx={styles.overviewContainer}>
          <Info content={content['overview']} />
        </Card>
      </Container>
      <Divider space='3' />
      <Quote content={content['quote']} />
      <Divider space='4' />
      <Divider space='5' />
      <ContentOne content={content['content-one']} />
      <Divider space='5' />
      <Divider space='5' />
      <ContentTwo content={content['content-two']} reverse />
      <Divider space='5' />
      <Divider space='5' />
      <ContentTwo content={content['content-three']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container sx={styles.callToActionContainer}>
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteAboutEnvironmentBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/about/environment", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default AboutEnvironmentPage
