import { LocalStorageKey, ThemeType } from 'shared-files/enums'

export const saveTheme = (isDarkTheme: boolean) => {
  const theme = isDarkTheme ? ThemeType.Dark : ThemeType.Light
  localStorage.setItem(LocalStorageKey.Theme, theme)
}
