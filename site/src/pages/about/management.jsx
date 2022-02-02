import React from 'react'
import { graphql } from 'gatsby'
import { Container, Card } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Values from '@solid-ui-blocks/Content/Block02'
import Testimonials from '@solid-ui-blocks/Testimonials/Block02'
import CallToAction from '@solid-ui-blocks/CallToAction/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutManagementPage = props => {
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
      <Testimonials content={content['testimonials']} />
      <Divider space='5' />
      <Divider space='5' />
      <Values content={content['values-intro']} />
      <Divider space='2' />
      <Values content={content['values']} />
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
  query siteAboutManagementBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/about/management", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default AboutManagementPage
