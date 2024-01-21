import baseColors from '@elegantstack/flow-ui-theme/src/theme/colors'

const blue = {
  100: '#908269',
  200: '#908269',
  300: '#908269',
  400: '#E4A534',
  500: '#E4A534',
  600: '#E4A534',
  700: '#E4A534',
  800: '#E4A534',
  900: '#E4A534'
}
const green = {
  100: '#434343',
  200: '#434343',
  300: '#434343',
  400: '#808285',
  500: '#808285',
  600: '#808285',
  700: '#808285',
  800: '#808285',
  900: '#808285'
}

const colors = {
  ...baseColors,
  alphaLighter: green[100],
  alphaLight: green[300],
  alpha: green[600],
  alphaDark: green[800],
  alphaDarker: green[900],
  betaLighter: blue[100],
  betaLight: blue[300],
  beta: blue[600],
  betaDark: blue[800],
  betaDarker: blue[900]
}

export default colors
