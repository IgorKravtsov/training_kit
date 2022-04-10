import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'
import App from './components/App/App'
import { ThemeProvider } from '@mui/material'
// import { StyledEngineProvider } from '@mui/material/styles'
import { store } from 'redux/store'
import { theme } from 'styles/theme'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      {/* <StyledEngineProvider injectFirst> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </StyledEngineProvider> */}
    </Provider>
  </Router>,
  document.getElementById('root')
)
