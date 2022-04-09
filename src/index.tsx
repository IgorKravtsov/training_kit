import React from 'react'
import ReactDOM from 'react-dom'
// import './config/firebase.config'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'
import App from './components/App/App'
import { ThemeProvider } from '@mui/styles'
// import { theme } from './styles/theme'
import { store } from 'redux/store'

ReactDOM.render(
  <Router>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ThemeProvider> */}
  </Router>,
  document.getElementById('root')
)
