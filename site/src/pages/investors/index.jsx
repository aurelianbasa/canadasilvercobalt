import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Content from '@solid-ui-blocks/Content/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import DropDown from '@solid-ui-blocks/Faq/Block01'
import Faq from '@solid-ui-blocks/Faq/Block02'
import Regulatory from '@solid-ui-blocks/Faq/Block01'
import Table from '../../blocks/Table/Block01'
import StockChart from '../../blocks/StockChart/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const MediaPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Helmet>
        <style type='text/css'>
          {`
						table {
							width:100%;
							border:2px solid #606060;
							border-collapse:collapse;
							padding:5px;
						}
						table th {
							border:2px solid #606060;
							padding:.5em 5px;
							background: #f0f0f0;
							color: #313030;
							font-size: 1.2em;
						}
						table td {
							border:2px solid #606060;
							text-align:center;
							padding:.5em 5px;
							background: #ffffff;
							color: #313030;
							font-size: 1.2em;
						}
    			`}
        </style>
      </Helmet>

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
      <Divider space='5' />
      <Table content={content['capital-structure']} />
      <Divider space='5' />
      <Divider space='5' />
      <Content content={content['presentations']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='narrow'>
        <DropDown content={content['technical-data']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Faq content={content['faq']} />
      <Divider space='5' />
      <Regulatory content={content['regulatory']} />
      <Container variant='narrow'>
        <Container variant='table'>
          <table>
            <thead>
              <tr>
              <th>Year</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
                <th>Q4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2021</td>
                <td><a href='site/content/assets/site/investors/financials/2021/2021-Q2-FS-CCW.pdf' download>Q1</a></td>
                <td><a href='../../downloads/financials/2021-Q2-FS-CCW.pdf'>Q2</a></td>
                <td>Q3</td>
                <td>Q4</td>
              </tr>
              <tr>
              <td>2020</td>
                <td>Q1</td>
                <td>Q2</td>
                <td>Q3</td>
                <td>Q4</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>Q1</td>
                <td>Q2</td>
                <td>Q3</td>
                <td>Q4</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>Q1</td>
                <td>Q2</td>
                <td>Q3</td>
                <td>Q4</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>Q1</td>
                <td>Q2</td>
                <td>Q3</td>
                <td>Q4</td>
              </tr>
            </tbody>
          </table>
          </Container>
          </Container>
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
