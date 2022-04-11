import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      // main: '#6d24f1',
      main: '#4A148C',
    },
    secondary: {
      main: '#6d24f1',
    },
    background: {
      default: '#f4faff',
      paper: '#ffffff',
    },
    error: {
      main: '#f56e66',
    },
    text: {
      primary: 'rgba(20,19,19,0.87)',
      secondary: 'rgba(28,24,24,0.54)',
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      dark: '#bdc3d2',
    },
    secondary: {
      main: '#13264c',
      // main: '#90caf9',
    },
    background: {
      paper: '#0A1929',
      default: '#0A1929',
    },
    error: {
      main: '#b70e04',
    },
    success: {
      main: '#1cd221',
    },
    text: {
      primary: '#E7EBF0',
    },
  },
})
