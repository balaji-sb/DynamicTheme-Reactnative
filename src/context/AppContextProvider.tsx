import React, {PropsWithChildren, useEffect, useState} from 'react';
import {darkTheme, lightTheme} from '../themes/themes';
import {PaperProvider} from 'react-native-paper';

export const AppContext = React.createContext(null);

type Props = PropsWithChildren<{}>;

export const MyThemeProvider: React.FC<Props> = props => {
  const [theme, changeTheme] = useState('light');
  const {children} = props;

  useEffect(() => {
    console.log('theme===>', theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{theme: theme, changeTheme}}>
      <PaperProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </PaperProvider>
    </AppContext.Provider>
  );
};
