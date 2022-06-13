import React, { useEffect } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'

import LoadingIndicator from 'components/LoadingIndicator/LoadingIndicator'
import Header from 'components/Header/Header'
import AppLayout from 'components/AppLayout'

import { darkTheme, lightTheme } from 'styles/theme'
import { selectTheme, toggleTheme } from 'redux/slices/themeSlice'
import { getTheme } from 'utils/getTheme'
import { selectLoadingIndicator } from 'redux/slices/loadingIndicatorSlice'

const App: React.FC = (): React.ReactElement => {
  const theme = useAppSelector(selectTheme)
  const { loading } = useAppSelector(selectLoadingIndicator)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(toggleTheme(getTheme()))
  }, [])

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <LoadingIndicator open={loading} />
      <Header />
      <AppLayout />
    </ThemeProvider>
  )
}

export default App
