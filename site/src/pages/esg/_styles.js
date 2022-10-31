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
