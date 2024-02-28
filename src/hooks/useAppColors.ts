import {useAppTheme} from './useAppTheme';

export const useAppColors = () => {
  const theme = useAppTheme();
  const {colors} = theme;
  return {colors, mbColors: colors.mbColors};
};
