import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Cards from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const MediaPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Video Interviews' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Cards content={content['video-interviews-16']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-15']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-14']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-13']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-12']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-11']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-10']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-9']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-8']} />
      <Divider space='5' />
      <Cards content={content['video-interviews-1']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-2']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-3']} />
      <Divider space='5' />
      <Cards content={content['video-interviews-4']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-5']} />
      <Divider space='5' />
      <Cards content={content['video-interviews-6']} />
      <Divider space='1' />
      <Cards content={content['video-interviews-7']} />
      <Divider space='5' />


      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteMediaVideoInterviewsBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/media/video-interviews", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default MediaPage
