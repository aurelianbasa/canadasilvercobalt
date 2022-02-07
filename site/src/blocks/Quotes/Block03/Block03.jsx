import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import { ImQuotesRight } from 'react-icons/im'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const TestimonialsBlock03 = ({
  content: { text, collection },
  reverse
}) => (
  <Container>
    <Flex
      sx={{
        alignItems: `flex-start`,
        flexDirection: [
          reverse ? `column-reverse` : `column`,
          null,
          null,
          reverse ? `row-reverse` : `row`
        ],
        mx: [null, null, null, -4]
      }}
    >
      <Box
        sx={{
          flexBasis: `1/2`,
          mx: [null, null, null, 4],
          [reverse ? 'mt' : 'mb']: [5, null, null, 0]
        }}
      >
            <ContentContainer
              content={container}
              variant='cards.paper'
              key={`item-${index}`}
              sx={{ position: `relative` }}
            >
              <Flex
                sx={{
                  alignItems: `center`,
                  position: `relative`,
                  flexWrap: `wrap`,
                  zIndex: 1
                }}
              >
                <Box sx={{ flex: [`100%`, 1], ml: [0, 4] }}>
                  <Reveal effect='fadeInUp'>
                    <ContentText content={text} />
                  </Reveal>
                </Box>
              </Flex>
              <ImQuotesRight
                css={css({
                  size: `30%`,
                  color: `omegaLighter`,
                  position: `absolute`,
                  transform: `translate(0, -20%)`,
                  bottom: 0,
                  right: 0
                })}
              />
            </ContentContainer>
      </Box>
      <Box
        sx={{
          flexBasis: `1/2`,
          mx: [null, null, null, 4],
          textAlign: [`center`, null, null, `left`]
        }}
      >
        <Reveal effect={reverse ? 'fadeInLeft' : 'fadeInRight'}>
          <ContentText content={text} />
          {buttons && (
            <>
              <Divider space={3} />
              <ContentButtons content={buttons} />
            </>
          )}
        </Reveal>
      </Box>
    </Flex>
  </Container>
)

export default WithDefaultContent(TestimonialsBlock03)
