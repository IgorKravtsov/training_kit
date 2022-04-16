import React, { useEffect } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

// import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
// import { logOutUser, setUser } from 'redux/slices/userSlice'
import Header from 'components/Header/Header'
import AppLayout from 'shared-files/AppLayout'
import { setUser } from 'redux/slices/userSlice'
import { darkTheme, lightTheme } from 'styles/theme'
import { selectTheme, toggleTheme } from 'redux/slices/themeSlice'
// import { transformUser } from 'utils/transformUser'
// import { getUserByEmail } from 'api/user/user'
// import { auth } from 'config/firebase.config'
import { getTheme } from 'utils/getTheme'

const App: React.FC = (): React.ReactElement => {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(toggleTheme(getTheme()))
  }, [])

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header />
      <AppLayout />
    </ThemeProvider>
  )
}

export default App
