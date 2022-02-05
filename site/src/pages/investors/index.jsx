import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Content from '@solid-ui-blocks/Content/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import DropDown from '@solid-ui-blocks/Faq/Block01'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Faq from '@solid-ui-blocks/Faq/Block02'
import Regulatory from '@solid-ui-blocks/Faq/Block01'
import Stats from '@solid-ui-blocks/CallToAction/Block02'
import Table from '../../blocks/Table/Block01'
import StockChart from '../../blocks/StockChart/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const MediaPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>     
      <Seo title='Investors' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <StockChart content={content['stock-information-chart']} />
      <Table content={content['stock-information-table']} />
      <Divider space='5' />
      <Table content={content['capital-structure']} />
      <Divider space='5' />
      <Container variant='narrow' sx={styles.captionContainer}>
      <Content content={content['materials-intro']} />
      <Divider space='2' />
      <Content content={content['presentations']} />
      </Container>
      
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='narrow'>
      <Content content={content['report-intro']} />
      <Divider space='1' />
      <Download content={content['report-one']} />
      <Divider space='2' />
      <Download content={content['report-two']} />
      <Divider space='2' />
      <Download content={content['report-three']} />
      <Divider space='5' />
      <Content content={content['financials-intro']} />
      <Divider space='1' />
      <Stats content={content['financials-one']} />
      <Divider space='2' />
      <Stats content={content['financials-two']} />
      <Divider space='2' />
      <Stats content={content['financials-three']} />
      <Divider space='2' />
      <Stats content={content['financials-four']} />
      <Divider space='5' />
      <Content content={content['mda-intro']} />
      <Divider space='1' />
      <Stats content={content['mda-one']} />
      <Divider space='2' />
      <Stats content={content['mda-two']} />
      <Divider space='2' />
      <Stats content={content['mda-three']} />
      <Divider space='2' />
      <Stats content={content['mda-four']} />
      <Divider space='5' />
      <Divider space='5' />
      </Container>

        <DropDown content={content['financials']} />
        <Divider space='5' />
        <Divider space='5' />
        <DropDown content={content['technical-data']} />
      <Divider space='5' />
      <Divider space='5' />
      <Faq content={content['faq']} />
      <Divider space='5' />
      <Regulatory content={content['regulatory']} />
        <Divider space='2' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteInvestorsBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/investors", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default MediaPage
