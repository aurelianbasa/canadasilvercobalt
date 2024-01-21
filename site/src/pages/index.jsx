import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import TopButton from '../blocks/Stats/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block06'
import Features from '@solid-ui-blocks/Features/Block05'
import Core from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Subscribe from '@solid-ui-blocks/CallToAction/Block02'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import Data from '../components/DatawrapperEmbed/DatawrapperEmbed'
import CustomTextBlock from '../../blocks/CustomText/CustomTextBlock'
import FeatureTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import WhyChooseUs from '@solid-ui-blocks/Features/Block01'
import Caption from '@solid-ui-blocks/Content/Block01'
import Blog from '@solid-ui-blocks/Blog/Block01'
import BottomButton from '../blocks/Stats/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import WithRecentPosts from '@solid-ui-blocks/WithRecentPosts'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Hero content={content['hero']} reverse />
        <Divider space={-3} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <TopButton content={content['interview']} />
      <Divider space='3' />
      <Features content={content['features-two']} />
      <Divider space='4' /> 
      <Divider space='4' />
      <Container>
      <CustomTextBlock content={content['custom-text']} />
      </Container>
      <Divider space='4' />
      <Container variant='wide' sx={styles.captionContainer}>
        <Core content={content['silver']} /> 
        <Caption content={content['caption-one']} />
      </Container>
      <Divider space='4' />
      <Info content={content['info']} reverse />
      <Divider space='4' />
      <Container>
          <Data content={content['data-1']} />
        </Container>
      <Divider space='4' />
      <FeatureTwo content={content['feature-two']} />
      <Divider space='4' />
      <Container variant='wide' sx={styles.captionContainer}>
        <Core content={content['cobalt']} />
        <Caption content={content['caption-two']} />
      </Container>
      <Divider space='5' />
      <WhyChooseUs content={content['why-choose-us']} />
      <Divider space='5' />
      <Subscribe content={content['subscribe']} />
      <Divider space='1' />
      <WithRecentPosts>
        <Blog content={content['latest-blogs']} />
      </WithRecentPosts>
      <Divider space='2' />
      <BottomButton content={content['button']} reverse />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteIndexBlockContent {
    allBlockContent(filter: { page: { in: ["site/index", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
