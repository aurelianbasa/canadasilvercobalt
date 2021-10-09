import React, { useEffect } from 'react'
import { Container, Box } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  container: {
    position: `relative`,
    overflow: `hidden`,
    width: `100%`,
    maxWidth: 735,
    mx: `auto`,
    pt: `56.25% ` /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  },
  iframe: {
    position: `absolute`,
    top: `0`,
    left: `0`,
    bottom: `0`,
    right: `0`,
    width: `100%`,
    height: `100%`
  }
}

const DrillHolesMapBlock01 = ({ content: { text, buttons } }) => {
  return (
    <Container>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={text} />
      </Box>
      <Box sx={styles.container}>
        <iframe style={styles.iframe} src='http://new.highwaybooks.com/' />
      </Box>
      {buttons && (
        <Box sx={{ textAlign: `center` }}>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </Box>
      )}
    </Container>
  )
}

export default WithDefaultContent(DrillHolesMapBlock01)
