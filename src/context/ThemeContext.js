import React, {createContext, useEffect, useState} from 'react';
import {getItem, storeItem} from '../utils/storage';
import {useColorScheme} from 'react-native';

const ThemeContext = createContext();

export const MBThemeProvier = ({children}) => {
  const colorTheme = useColorScheme();
  const [theme, setTheme] = useState(colorTheme);
  console.log('colorTheme', colorTheme);

  useEffect(() => {
    const getTheme = async () => {
      const savedTheme = await getItem('theme', 'light');
      console.log('savedTheme', savedTheme);
      if (savedTheme !== undefined) {
        setTheme(savedTheme);
      }
    };
    getTheme();
  }, [theme]);

  const toggleTheme = newTheme => {
    console.log('newTheme', newTheme);
    setTheme(newTheme);
    storeItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
