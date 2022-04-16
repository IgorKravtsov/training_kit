import { LocalStorageKey, ThemeType } from 'shared-files/enums'

export const getTheme = (): boolean => {
  const theme = localStorage.getItem(LocalStorageKey.Theme) || 'light'
  return theme === ThemeType.Dark
}
