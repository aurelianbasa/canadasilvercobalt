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
import Quote from '@solid-ui-blocks/Testimonials/Block03'
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
      <Quote content={content['content-one']} reverse />
      <Divider space='5' />
      <Container variant='narrow'>
        <CrossSection content={content['cross-section-1']} />
        <Divider space='2' />
        <Content content={content['content-three']} />
        <Divider space='5' />
        <Info content={content['info-1']} reverse />
        <Divider space='5' />
        <Info content={content['info-2']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Content content={content['content-two']} reverse />
      <Divider space='5' />
      <Container variant='narrow'>
      <Divider space='2' />
        <Content content={content['content-six']} />
        <Container variant='table'>
          <table>
            <thead>
              <tr>
                <th>Inferred Mineral Resources</th>
                <th>Ag (g/t)</th>
                <th>Co (g/t)</th>
                <th>Cu (g/t)</th>
                <th>Ni (g/t)</th>
                <th>Pb (g/t)</th>
                <th>Zn (g/t)</th>
                <th>AgEq (g/t)</th>
                <th>Tonnes</th>
                <th>Ag (oz.)</th>
                <th>AgEq (oz.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zone 1A</td>
                <td>7,960</td>
                <td>946</td>
                <td>349</td>
                <td>790</td>
                <td>16</td>
                <td>12</td>
                <td>8,042</td>
                <td>8,100</td>
                <td>2,073,000</td>
                <td>2,094,000</td>
              </tr>
              <tr>
                <td>Zone 1B</td>
                <td>8,843</td>
                <td>2,308</td>
                <td>325</td>
                <td>336</td>
                <td>30</td>
                <td>52</td>
                <td>8,998</td>
                <td>19,300</td>
                <td>5,487,200</td>
                <td>5,583,200</td>
              </tr>
              <tr>
                <td>Zone 2A</td>
                <td>38</td>
                <td>5,673</td>
                <td>2,101</td>
                <td>453</td>
                <td>118</td>
                <td>108</td>
                <td>426</td>
                <td>5,500</td>
                <td>6,800</td>
                <td>75,300</td>
              </tr>
              <tr>
                <td>Total Inferred Mineral Resources</td>
                <td>7,149</td>
                <td>2,537</td>
                <td>628</td>
                <td>467</td>
                <td>41</td>
                <td>52</td>
                <td>7,325</td>
                <td>32,900</td>
                <td>7,567,000</td>
                <td>7,752,000</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Container>

      <Divider space='5' />
      <DrillMap content={content['drill-map']} />
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
