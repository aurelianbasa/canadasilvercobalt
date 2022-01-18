import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Content from '@solid-ui-blocks/FeaturesWithPhoto/Block07'
import ContentThree from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import CallToAction from '@solid-ui-blocks/CallToAction/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutRegionalHistoryPage = props => {
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
      <Divider space='5' />
      <Divider space='5' />
      <Content content={content['content-one']} />
      <Divider space='5' />
      <Divider space='5' />
      <Content content={content['content-two']} reverse />
      <Divider space='5' />
      <Divider space='5' />
      <Container>
        <Card variant='paper-lg' sx={styles.greyContainer}>
          <ContentThree content={content['content-three']} />
          <Divider space='5' />
          <ContentThree content={content['content-four']} reverse />
        </Card>
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Container sx={styles.callToActionContainer}>
        <CallToAction content={content['call-to-action']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteAboutRegionalHistoryBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/about/regional-history", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default AboutRegionalHistoryPage
