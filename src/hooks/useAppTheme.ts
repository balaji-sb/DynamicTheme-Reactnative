import {useColorScheme} from 'react-native';
import {useTheme} from 'react-native-paper';
import {darkTheme, lightTheme} from '../themes/themes';

export const useAppTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;
  type AppTheme = typeof theme;
  return useTheme<AppTheme>();
};
