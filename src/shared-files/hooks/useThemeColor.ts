import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectTheme } from 'redux/slices/themeSlice'

export const useThemeColor = () => {
  const { darkTheme } = useAppSelector(selectTheme)

  return darkTheme ? 'secondary' : 'primary'
}
