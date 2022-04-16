import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'
import App from './components/App/App'
import { store } from 'redux/store'
import AuthProvider from 'shared-files/AuthProvider/AuthProvider'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
)
