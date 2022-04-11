import { LocalStorageKey } from 'shared-files/enum/LocalStorageKey'

export const getTheme = (): boolean => {
  const theme = localStorage.getItem(LocalStorageKey.Theme) || 'light'
  return theme === 'dark'
}
