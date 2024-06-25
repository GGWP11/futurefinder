import { ThemeProvider } from 'styled-components';

const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const futureFinderTheme = {
  colors: {
    black: '#000000',
    grape: '#553E73',
    pink: '#FF5E7C',
    rackley: '#558DA9',
    orange: '#FFB756',
    bubbles: '#EAFAF7',
    rhythm: '#6C779F ',
    white: '#FFFFFF'
  },
  fonts: ['Montserrat'],
  fontSizes: {
    xsmall: '0.8rem',
    small: '1.0rem',
    smallmedium: '1.5rem',
    medium: '2rem',
    mediumlarge: '3rem',
    large: '3.5rem',
    xlarge: '4rem',
    xxlarge: '5rem',
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  breakpoints: {
    up: key => `@media (min-width: ${breakpoints[key]})`,
    down: key => `@media (max-width: ${breakpoints[key]})`,
    between: (keyMin, keyMax) => `@media (min-width: ${breakpoints[keyMin]}) and (max-width: ${breakpoints[keyMax]})`,
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={futureFinderTheme}>{children}</ThemeProvider>;
}