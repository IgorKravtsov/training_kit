import { combineReducers } from 'redux'
import { userReducer } from 'redux/slices/userSlice'
import { snackbarReducer } from 'redux/slices/snackbarSlice'
import { sidebarReducer } from 'redux/slices/sidebarSlice'
import { themeReducer } from 'redux/slices/themeSlice'
import { organizationReducer } from 'redux/slices/organizationSlice'
import { loadingIndicatorReducer } from 'redux/slices/loadingIndicatorSlice'
import { notificationReducer } from 'redux/slices/notificationSlice'
import { abonementReducer } from 'redux/slices/abonementSlice'
import { gymReducer } from 'redux/slices/gymSlice'
import { trainingReducer } from 'redux/slices/trainingSlice'
import { myTrainingReducer } from 'redux/slices/myTrainingsSlice'
import { assignTrainersReducer } from './slices/assignTrainersSlice'
import { learnerAbonementReducer } from './slices/learnerAbonementSlice'
import { assignLearnersReducer } from './slices/assignLearnersSlice'

const reducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  sidebar: sidebarReducer,
  theme: themeReducer,
  organization: organizationReducer,
  loadingIndicator: loadingIndicatorReducer,
  notification: notificationReducer,
  abonement: abonementReducer,
  gym: gymReducer,
  training: trainingReducer,
  myTrainings: myTrainingReducer,
  assignTrainers: assignTrainersReducer,
  learnerAbonement: learnerAbonementReducer,
  assignLearners: assignLearnersReducer,
})

export default reducer
