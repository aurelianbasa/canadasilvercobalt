import React from 'react'
import { Container, Grid, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const PhotoGalleryBlock01 = ({ content: { text, collection, buttons } }) => (
  <Container sx={{ textAlign: `center` }}>
    <ContentText content={text} />
    <Divider />
    <Grid columns={[1, 2, 3]}>
      {collection?.map(({ images }, i) => (
        <Reveal effect='fadeIn'>
          <ContentImages key={`item=${i}`} content={{ images }} />
        </Reveal>
      ))}
    </Grid>
    {buttons && (
      <>
        <Divider space={3} />
        <ContentButtons content={buttons} />
      </>
    )}
  </Container>
)

export default WithDefaultContent(PhotoGalleryBlock01)
