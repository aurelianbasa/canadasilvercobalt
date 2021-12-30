import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Content from '@solid-ui-blocks/Content/Block01'
import DrillMap from '../../blocks/DrillHolesMap/Block01'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import CrossSection from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const ProjectItemPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
    <Helmet>
    <style type='text/css'>{`
    table {
      border:1px solid #b3adad;
      border-collapse:collapse;
      padding:5px;
    }
    table th {
      border:1px solid #b3adad;
      padding:5px;
      background: #f0f0f0;
      color: #313030;
    }
    table td {
      border:1px solid #b3adad;
      text-align:center;
      padding:5px;
      background: #ffffff;
      color: #313030;
    }
    `}</style>
    </Helmet>

      <Seo title='Castle East Project' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['overview']} />
      <Divider space='4' />
      <Download content={content['download']} />
      <Divider space='4' />
      <Info content={content['overview-2']} reverse />
      <Divider space='4' />
      <Content content={content['content-one']} reverse />
      <Divider space='5' />
      <Container variant='narrow'>
        <CrossSection content={content['cross-section-1']} />
        <Divider space='2' />
        <Content content={content['content-three']} />
        <Divider space='5' />
        <Info content={content['info-1']} reverse />
        <Divider space='5' />
        <Info content={content['info-2']} />
        <Divider space='5' />
        <DrillMap content={content['drill-map']} />
      </Container>

      <Container>
    <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
        <th>Header 4</th>
        <th>Header 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hello</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Testing</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Aurelian</td>
        <td>3</td>
        <td>5</td>
        <td>7</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Table</td>
        <td>22</td>
        <td>7</td>
        <td>3</td>
        <td>5</td>
      </tr>
    </tbody>
  </table> 
</Container>



      <Divider space='5' />
      <Content content={content['content-two']} reverse />
      <Divider space='4' />
      <CrossSection content={content['cross-section-3']} />
      <Divider space='2' />
      <Content content={content['content-four']} />
      <Divider space='5' />
      <CrossSection content={content['cross-section-4']} />
      <Divider space='2' />
      <Content content={content['content-five']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsCastleEastBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects/castle-east", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectItemPage
