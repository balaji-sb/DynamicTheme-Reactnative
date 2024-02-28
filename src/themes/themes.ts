import {MD3DarkTheme, MD3LightTheme} from 'react-native-paper';

const myDarkColors = {
  textColor: 'yellow',
  backgroundColor: '#3d3838',
};

const myLightColors = {
  textColor: 'purple',
  backgroundColor: '#e7eadc',
};

export const darkTheme = {
  ...MD3DarkTheme,
  dark: true,
  colors: {
    ...MD3DarkTheme.colors,
    primary: 'tomato',
    // customColor: myDarkColors,
    mbColors: myDarkColors,
    secondary: 'white',
  },
};

export const lightTheme = {
  ...MD3LightTheme,
  dark: false,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'black',
    mbColors: myLightColors,
    // customColor: myLightColors,
    secondary: 'yellow',
  },
};
