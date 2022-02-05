/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
    captionContainer: {
      bg: `alpha`,
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
