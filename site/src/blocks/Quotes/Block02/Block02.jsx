import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import { ImQuotesRight } from 'react-icons/im'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const TestimonialsBlock02 = ({ content: { text, collection } }) => (
  <Container>
    <Box sx={{ textAlign: `left` }}>
      <ContentText content={text} />
    </Box>
    <Divider />
    <Flex sx={{ mx: -3, flexWrap: `wrap` }}>
      {collection?.map(({ container, text }, index) => (
        <Box
          key={`item-${index}`}
          sx={{ flexBasis: [`1`, `1/2`], flexGrow: 1, p: 3 }}
        >
          <Reveal effect='fadeInLeft' delay={0.25 * (index + 2)}>
            <Flex
              sx={{
                alignItems: `left`,
                flexDirection: [`column`]
              }}
            >
              <ContentContainer
                content={container}
                variant='cards.paper'
                sx={{
                  flexBasis: `1/3`,
                  textAlign: `center`,
                  position: `relative`,
                  width: `full`
                }}
              >
                <ImQuotesRight
                  css={css({
                    size: `icon.lg`,
                    color: `omegaDarker`,
                    position: `absolute`,
                    bottom: `82%`,
                    left: `90%`,
                    transform: `translate(-50%, 0)`
                  })}
                />
                <ContentText content={text?.slice(0, 2)} />
              </ContentContainer>
              <Box sx={{ flexBasis: `1/2`, flexGrow: 1 }}>
                <ContentText content={text?.slice(2)} />
              </Box>
            </Flex>
          </Reveal>
        </Box>
      ))}
    </Flex>
  </Container>
)

export default WithDefaultContent(TestimonialsBlock02)
