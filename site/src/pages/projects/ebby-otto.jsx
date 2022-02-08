import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Quote from '../../blocks/Quotes/Block01'
import Location from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Milestones from '@solid-ui-blocks/Features/Block01'
import Feature from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const ProjectItemPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Ebby-Otto Project' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['overview']} />
      <Divider space='2' />
      <Quote content={content['content-one']} />
      <Divider space='4' />

      <Milestones content={content['milestones-1']} />
      <Divider space='2' />
      <Milestones content={content['milestones-2']} />

      <Divider space='5' />
      <Feature content={content['feature-one']} reverse />
      <Divider space='4' />
      <Feature content={content['feature-two']} />
      <Divider space='4' />
      <Container variant='narrow'>
        <Location content={content['location']} />
        <Divider space='5' />
        <Info content={content['info-1']} reverse />
        <Divider space='5' />
        <Info content={content['info-2']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsEbbyOttoBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects/ebby-otto", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectItemPage
