import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import FeatureTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Quote from '@solid-ui-blocks/Content/Block01'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import CrossSection from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import DrillMap from '../../blocks/DrillHolesMap/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const ProjectItemPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Castle Mine Project' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['overview']} />
      <Divider space='4' />
      <Divider space='4' />
      <Download content={content['download']} />
      <Divider space='4' />
      <FeatureOne content={content['feature-one']} reverse />
      <Divider space='4' />
      <FeatureTwo content={content['feature-two']} />
      <Divider space='4' />
      <Container variant='narrow'>
        <Info content={content['info-1']} reverse />
        <Divider space='5' />
        <Info content={content['info-2']} />
        <Divider space='5' />
      </Container>
      <Divider space='5' />
      <CrossSection content={content['cross-section-1']} />
      <Divider space='2' />
      <Quote content={content['quote-1']} />
      <Divider space='4' />
      <CrossSection content={content['cross-section-2']} />
      <Divider space='2' />
      <Quote content={content['quote-2']} />
      <Divider space='4' />
      <CrossSection content={content['cross-section-3']} />
      <Divider space='2' />
      <Quote content={content['quote-3']} />
      <Divider space='3' />
      <Container variant='narrow'>
        <DrillMap content={content['drill-map']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsCastleMineBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects/castle-mine", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectItemPage
