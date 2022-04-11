import { combineReducers } from 'redux'
import { userReducer } from 'redux/slices/userSlice'
import { snackbarReducer } from 'redux/slices/snackbarSlice'
import { sidebarReducer } from 'redux/slices/sidebarSlice'
import { themeReducer } from 'redux/slices/themeSlice'

const reducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
})

export default reducer
