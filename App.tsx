import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useContext} from 'react';
import {useAppColors} from './src/hooks/useAppColors';
import ThemeContext from './src/context/ThemeContext';
import {Button} from 'react-native-paper';
import {AppContext} from './src/context/AppContextProvider';

const App = () => {
  const {mbColors} = useAppColors();
  const {theme, changeTheme} = useContext(AppContext);
  // const {theme, toggleTheme} = useContext(AppContext);

  // const updateTheme = useCallback(() => {
  //   if (theme === 'light') {
  //     toggleTheme('dark');
  //   } else {
  //     toggleTheme('light');
  //   }
  // }, [theme, toggleTheme]);

  const toggleTheme = () => {
    console.log('theme-inside', theme);
    if (theme === 'light') {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  };

  return (
    <View
      style={{
        backgroundColor: mbColors.backgroundColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: mbColors.textColor,
          fontSize: 24,
          margin: 16,
        }}>
        App
      </Text>
      <Button
        mode="elevated"
        theme={{roundness: 1}}
        onPress={() => toggleTheme()}>
        Press me
      </Button>
    </View>
  );
};

export default App;
