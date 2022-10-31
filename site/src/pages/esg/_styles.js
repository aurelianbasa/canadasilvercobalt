/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import growth from './assets/growth.svg'

export default {
  overviewContainer: {
    bg: `omegaDarker`,
    py: 6,
    px: [4, 2]
  },
  greyContainer: {
    py: [5, 6],
    background: t => `linear-gradient(
      150deg,
      ${t.colors.omegaLight} 50%,
      ${t.colors.omega} 100%
    )`
  },
  testimonialsContainer: {
    position: `relative`,
    pt: 6,
    pb: 5,
    '::before': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `full`,
      top: 0,
      right: 0,
      zIndex: -1,
      borderRadius: `xl`,
      background: `linear-gradient(
        180deg,
        #f7f9fe 0%,
        #f4f4f8 100%
      )`
    }
  },
  callToActionContainer: {
    position: `relative`,
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: [`25%`, 0],
      right: 6,
      zIndex: -1,
      background: `url(${growth}) no-repeat right 0`,
      backgroundSize: `55%`
    }
  }
}
