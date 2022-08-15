import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Content from '@solid-ui-blocks/Content/Block02'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Projects from '@solid-ui-blocks/Blog/Block01'
import FirstInfo from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import SecondInfo from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const ProjectsPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Projects' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Projects content={content['projects-row-1']} />
      <Projects content={content['projects-row-2']} />
      <Divider space='5' />
      <Divider space='5' />
      <Content content={content['technical-reports']} />
      <Divider space='1' />
      <Download content={content['report-four']} />
      <Divider space='2' />
      <Download content={content['report-one']} />
      <Divider space='2' />
      <Download content={content['report-two']} />
      <Divider space='5' />
      <Download content={content['report-three']} />
      <Divider space='5' />
      <Divider space='5' />
      <FirstInfo content={content['ttl-facility']} />
      <Divider space='5' />
      <Divider space='5' />
      <SecondInfo content={content['re-2ox-process']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectsPage
