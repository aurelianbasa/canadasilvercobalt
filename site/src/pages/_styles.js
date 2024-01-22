/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import gold from './assets/gold.jpg'

export default {
  heroContainer: {
    position: `relative`,
    py: [5],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: [0, null, `45%`],
      left: 0,
      transform: [`translate(0, 0)`, null, `translate(0, 0)`],
      zIndex: -1,
      borderRadius: [0, null, `xl`]
    },
    '::after': {
      background: `linear-gradient(
          180deg,
          rgba(255,255,255,0.8) 0%,
          rgba(255,255,255,0.1) 100%
        )`
    },
    '::before': {
      background: `url(images/cobalt-bg-optimized.jpg) no-repeat center center`,
      backgroundSize: `cover`
    }
  },
  newContainer: {
    position: `relative`,
    py: [5],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `10/12`,
      top: 0,
      right: 0,
      borderRadius: t => `0 0 ${t.radii.xl} ${t.radii.xl}`,
      borderRadius: `xl`,
      mx: `auto`
    },
    '::after': {
      zIndex: -2,
      background: `url(${gold}) no-repeat right bottom`,
      backgroundSize: `cover`,
      opacity: 0.4
    },
    '::before': {
      background: `url(images/about.jpg) center center`,
      backgroundSize: `contain`
    }
  },
  captionContainer: {
    bg: `white`,
    borderRadius: `xl`,
    position: `relative`,
    py: [1, 1],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `inherit`,
      top: 1,
      right: 0,
      zIndex: 1,
      borderRadius: `xl`
    }
  }
}
