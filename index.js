/**
 * @format
 */

import {AppRegistry, useColorScheme} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './src/themes/themes';
import {MyThemeProvider} from './src/context/AppContextProvider';

export const Main = () => {
  const colorTheme = useColorScheme();
  const isDarkMode = colorTheme === 'dark';

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
