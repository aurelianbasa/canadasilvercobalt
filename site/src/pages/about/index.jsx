import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Management from '@solid-ui-blocks/Teams/Block02'
import CompanyHistory from '@solid-ui-blocks/FeaturesWithPhoto/Block07'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutPage = props => {
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
      <Container variant='cards.paper' sx={styles.overviewContainer}>
        <Info content={content['overview']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Management content={content['management']} />
      <Divider space='5' />
      <Divider space='5' />
      <CompanyHistory content={content['company-history']} />
      <Divider space='5' />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['regional-history']} reverse />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['community']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['environment']} reverse />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteAboutBlockContent {
    allBlockContent(filter: { page: { in: ["site/about", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default AboutPage
