import { LocalStorageKey } from 'shared-files/enum/LocalStorageKey'

export const saveTheme = (isDarkTheme: boolean) => {
  const theme = isDarkTheme ? 'dark' : 'light'
  localStorage.setItem(LocalStorageKey.Theme, theme)
}
