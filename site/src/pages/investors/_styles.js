/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
    captionContainer: {
      bg: `omegaDarker`,
        borderRadius: `xl`,
        position: `relative`,
        py: [2, 2],
        '::before': {
          position: `absolute`,
          content: `" "`,
          size: `inherit`,
          top: 2,
          right: 0,
          zIndex: 1,
          borderRadius: `xl`
        }
      }
    }
