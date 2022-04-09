import { combineReducers } from 'redux'
import { userReducer } from 'redux/slices/userSlice'
import { snackbarReducer } from 'redux/slices/snackbarSlice'
import { sidebarReducer } from 'redux/slices/sidebarSlice'

const reducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  sidebar: sidebarReducer,
})

export default reducer
