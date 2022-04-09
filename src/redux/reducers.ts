import { combineReducers } from 'redux'
import { userReducer } from 'redux/slices/userSlice'
import { snackbarReducer } from 'redux/slices/snackbarSlice'

const reducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
})

export default reducer
