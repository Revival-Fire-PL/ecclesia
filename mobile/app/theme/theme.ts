import { DarkTheme } from '@react-navigation/native';
import { colors } from './colors';

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.gray900,
    card: colors.gray600,
    text: colors.white,
    border: colors.border,
    notification: colors.notification,
  },
};
