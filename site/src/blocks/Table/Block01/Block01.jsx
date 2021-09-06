import React from 'react'
import { Container, Flex, Box, Card, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  row: {
    '& + &': {
      borderTopStyle: `solid`,
      borderTopWidth: `sm`,
      borderTopColor: `omega`
    }
  },
  item: {
    flexBasis: `1/2`,
    p: 2,
    m: 0,
    '& + &': {
      borderLeftStyle: `solid`,
      borderLeftWidth: `sm`,
      borderLeftColor: `omega`,
      pl: 4
    }
  }
}
const ContentTable01 = ({ content: { text, collection, buttons } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
    </Box>
    <Divider />
    <Card variant='paper'>
      {collection?.map(({ text }, i) => (
        <Flex key={`item-${i}`} sx={styles.row}>
          <ContentText content={text} sx={styles.item} />
        </Flex>
      ))}
    </Card>
    {buttons && (
      <>
        <Divider space={3} />
        <Reveal
          effect='fadeInRight'
          delay={1}
          css={css({ mb: [4, null, null, 0] })}
        >
          <ContentButtons content={buttons} />
        </Reveal>
      </>
    )}
  </Container>
)

export default WithDefaultContent(ContentTable01)
