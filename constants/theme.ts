import {DefaultTheme} from 'react-native-paper';
 
// set in dark-mode
// TODO: make a light-mode
export default {
  ...DefaultTheme,
  dark: false,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    blue: '#1c63cc',
    good: '#52b202',
    bad: '#ff1744',
    warning: '#ffee33',
    primary: '#000a0a',
    // primary: 'white',
    grey: 'grey',
    secondary: '#C4C4C4',
    // secondary: '#C4C4C4',
    accent: '#fff',
    background: '#ffff',
    backdrop: '#F5F5F5',
    text: '#000',

  },
};
