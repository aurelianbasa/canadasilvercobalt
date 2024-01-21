import baseColors from '@elegantstack/solid-ui-theme/src/colors'

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
  alphaLighter: blue[100],
  alphaLight: blue[300],
  alpha: blue[600],
  alphaDark: blue[800],
  alphaDarker: blue[900],
  betaLighter: green[100],
  betaLight: green[300],
  beta: green[600],
  betaDark: green[800],
  betaDarker: green[900]
}

export default colors
