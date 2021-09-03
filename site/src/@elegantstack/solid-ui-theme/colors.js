import baseColors from '@elegantstack/solid-ui-theme/src/colors'

const blue = {
  100: '#D5E4FA',
  200: '#ACC8F5',
  300: '#7EA1E2',
  400: '#587CC6',
  500: '#2A4DA1',
  600: '#1E3B8A',
  700: '#152B73',
  800: '#0D1D5D',
  900: '#08144D'
}
const green = {
  100: '#D9FBD1',
  200: '#ACF7A6',
  300: '#75E877',
  400: '#50D25E',
  500: '#20B53E',
  600: '#179B3E',
  700: '#10823C',
  800: '#0A6838',
  900: '#065635'
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
