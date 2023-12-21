import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Content from '@solid-ui-blocks/Content/Block01'
import Location from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const ProjectItemPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Lowney Lac Edouard' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['overview']} />
      <Divider space='5' />
      <Container variant='narrow'>
        <Location content={content['location']} />
        <Divider space='2' />
        <Content content={content['content']} />
        <Divider space='4' />
        <Location content={content['location-2']} />
        <Divider space='2' />
        <Content content={content['content-2']} />
        <Divider space='4' />
        <Location content={content['location-3']} />
        <Divider space='2' />
        <Content content={content['content-3']} />
        <Divider space='4' />
        <Location content={content['location-4']} />
        <Divider space='2' />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsLowneyLacEdouardBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects/lowney-lac-edouard", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectItemPage
