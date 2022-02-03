import React from 'react'
import { Link as GLink } from 'gatsby'
import Sticky from 'react-sticky-el'
import { Container, Box, Flex, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Drawer from '@solid-ui-components/Drawer'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const HeaderBlock01 = ({ content: { images, collection }, menuJustify }) => {
  return (
    <>
      <Sticky
        enabled='false'
        stickyClassName='nav-sticky'
        css={css(styles.wrapper)}
      >
        <Container variant='full' className='nav-container'>
          <Container px='4'>
            <Flex sx={styles.header}>
              <Box sx={styles.logoContainer}>
                <GLink to='/'>
                  <ContentImages
                    content={{ images }}
                    sx={styles.image}
                    imageEffect='fadeIn'
                  />
                </GLink>
              </Box>
              {collection && (
                <>
                  <Box sx={styles.desktopMenu}>
                    <Reveal effect='fadeInDown'>
                      <Flex
                        sx={{
                          alignItems: `center`,
                          justifyContent: menuJustify
                        }}
                      >
                        {collection.map(
                          ({ buttons }, index) =>
                            buttons && (
                              <Box
                                key={`item-${index}`}
                                sx={{
                                  '& + &': {
                                    ml: 4
                                  }
                                }}
                              >
                                <ContentButtons content={buttons} />
                              </Box>
                            )
                        )}
                      </Flex>
                    </Reveal>
                  </Box>
                  <Box sx={styles.mobileMenu}>
                    <Drawer buttonStyle={{ svg: { size: 32 } }}>
                      {collection.map(
                        ({ buttons }, index) =>
                          buttons && (
                            <Box
                              key={`item-${index}`}
                              sx={{
                                fontSize: 3,
                                '.button-group-link.level-1, button-group-link.level-1:visited':
                                  {
                                    color: `headerActiveColor`
                                  }
                              }}
                            >
                              <ContentButtons
                                content={buttons}
                                variant='vertical'
                              />
                            </Box>
                          )
                      )}
                    </Drawer>
                  </Box>
                </>
              )}
            </Flex>
          </Container>
        </Container>
      </Sticky>
    </>
  )
}

HeaderBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(HeaderBlock01)
