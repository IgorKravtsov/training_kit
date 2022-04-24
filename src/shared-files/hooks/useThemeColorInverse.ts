import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectTheme } from 'redux/slices/themeSlice'

export const useThemeColorInverse = () => {
  const { darkTheme } = useAppSelector(selectTheme)

  return darkTheme ? 'primary' : 'secondary'
}
