/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
  heroContainer: {
    position: `relative`,
    py: [5],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: [0, null, `50%`],
      left: 0,
      transform: [`translate(0, 0)`, null, `translate(0, 0)`],
      zIndex: -1,
      borderRadius: [0, null, `xl`]
    },
    '::after': {
      background: `linear-gradient(
          180deg,
          rgba(255,255,255,0.2) 0%,
          rgba(255,255,255,0.4) 100%
        )`
    },
    '::before': {
      background: `url(images/cobalt-bg.jpg) no-repeat center center`,
      backgroundSize: `cover`
    }
  }
}
