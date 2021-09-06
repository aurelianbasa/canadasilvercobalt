import React from 'react'
import { Container, Flex, Box, Card, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import Tabs from '@solid-ui-components/Tabs'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ContentForm from '@solid-ui-components/ContentForm'
import ListItem from '@solid-ui-components/ListItem'
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
const FormBlock01 = ({ content, reverse }) => {
  const { identifier, text } = content

  return (
    <Container>
      <Flex
        sx={{
          alignItems: `stretch`,
          flexDirection: [
            reverse ? `column-reverse` : `column`,
            reverse ? `row-reverse` : `row`
          ]
        }}
      >
        {/* {hasMedia && (
        <Box
          sx={{
            display: [`none`, null, `block`],
            flex: 1,
            minWidth: [null, null, null, 500],
            height: 750,
            position: `relative`,
            borderRadius: reverse ? `right` : `left`,
            overflow: `hidden`
          }}
        >
          {images && (
            <ContentImages
              content={{ images }}
              imageFit='cover'
              height='100%'
              reverse={reverse}
            />
          )}
          {map && (
            <Reveal
              effect={reverse ? 'fadeInRight' : 'fadeInLeft'}
              style={{ width: `100%`, height: `100%` }}
            >
              <ContentMap content={map} />
            </Reveal>
          )}
        </Box>
      )} */}
        {Array.isArray(content.collection) && (
          <Box>
            <ContentText content={text} space={3} />
            <Flex sx={{ flexDirection: [`column`, `row`] }}>
              {content.collection
                ?.filter(Boolean)
                ?.map(({ text, collection, form }, index) => (
                  <Card
                    variant='paper'
                    key={`item-${index}`}
                    sx={{
                      flexBasis: `2/3`,
                      '& + &': {
                        ml: 5,
                        flexBasis: `1/3`
                      }
                    }}
                  >
                    {text && (
                      <>
                        <Box sx={{ textAlign: `center` }}>
                          <ContentText content={text?.slice(1)} />
                        </Box>
                        <Divider space={3} />
                      </>
                    )}
                    {collection?.map((props, index) => (
                      <ListItem key={`item-${index}`} {...props} compact />
                    ))}
                    {form && (
                      <ContentForm
                        form={form}
                        id={`form.${identifier}.${
                          form.multiStep ? 'multi' : index
                        }`}
                      />
                    )}
                  </Card>
                ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(FormBlock01)
