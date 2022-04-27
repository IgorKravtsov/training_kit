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

const commonTheme = {
  typography: {
    fontFamily: ['Nunito Sans', 'Sen', 'Roboto'].join(', '),
    h1: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '40px',
      // letterSpacing: '1px',
    },
    // h2: {
    //   fontSize: '23px',
    //   fontWeight: 600,
    //   lineHeight: '33px',
    //   // letterSpacing: '1px',
    // },
    // h3: {
    //   fontSize: '20px',
    //   fontWeight: 600,
    //   lineHeight: '31px',
    //   // letterSpacing: '1px',
    // },
    // h4: {
    //   fontSize: '20px',
    //   fontWeight: 500,
    //   lineHeight: '31px',
    //   // letterSpacing: '1px',
    // },
    // h5: {
    //   fontSize: '16px',
    //   fontWeight: 500,
    //   lineHeight: '25px',
    //   // letterSpacing: '1px',
    // },
    // h6: {
    //   fontSize: '13px',
    //   fontWeight: 500,
    //   lineHeight: '25px',
    //   // letterSpacing: '1px',
    // },
    // body1: {
    //   fontSize: '14px',
    //   lineHeight: '20px',
    //   // fontWeight: 500,
    //   // letterSpacing: '1px',
    // },
    // body2: {
    //   fontSize: '14px',
    //   lineHeight: '22px',
    //   // fontWeight: 600,
    //   // letterSpacing: '1px',
    // },
  },
}

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#6d24f1',
    },
    secondary: {
      main: '#41148C',
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
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: {
      // main: '#13264c',
      main: '#90caf9',
    },
    secondary: {
      // main: '#90caf9',
      main: '#13264c',
    },
    background: {
      paper: '#0A1929',
      default: '#0A1929',
    },
    error: {
      main: '#d81409',
    },
    success: {
      main: '#1cd221',
    },
    text: {
      primary: '#E7EBF0',
    },
  },
})
