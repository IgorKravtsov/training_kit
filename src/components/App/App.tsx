import React, { useEffect } from 'react'
import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import Header from 'components/Header/Header'
import AppLayout from 'shared-files/AppLayout'

import { darkTheme, lightTheme } from 'styles/theme'
import { selectTheme, toggleTheme } from 'redux/slices/themeSlice'
import { getTheme } from 'utils/getTheme'
import { selectLoadingIndicator } from 'redux/slices/loadingIndicator'

const App: React.FC = (): React.ReactElement => {
  const theme = useAppSelector(selectTheme)
  const { loading } = useAppSelector(selectLoadingIndicator)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(toggleTheme(getTheme()))
  }, [])

  // if (loading) {
  //   return (
  //     <Backdrop sx={{ color: theme => theme.palette.primary.main, zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
  //       <CircularProgress color='inherit' />
  //     </Backdrop>
  //   )
  // }

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {loading ? (
        <Backdrop sx={{ color: theme => theme.palette.primary.main, zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <>
          <Header />
          <AppLayout />
        </>
      )}
    </ThemeProvider>
  )
}

export default App
