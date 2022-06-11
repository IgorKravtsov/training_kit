import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PublicAppUserDto } from 'api/user/types'
import { RootState } from 'redux/store'

interface AssignTrainersSliceState {
  appTrainerList: PublicAppUserDto[]
  requestTrainerList: PublicAppUserDto[]
}

const initialState: AssignTrainersSliceState = {
  appTrainerList: [],
  requestTrainerList: [],
}

const assignTrainersSlice = createSlice({
  name: 'assignTrainersSlice',
  initialState,
  reducers: {
    setTrainerList(state, action: PayloadAction<PublicAppUserDto[]>) {
      state.appTrainerList = action.payload
    },
    setRequestTrainerList(state, action: PayloadAction<PublicAppUserDto[]>) {
      state.requestTrainerList = action.payload
    },
  },
})

export const { setTrainerList, setRequestTrainerList } =
  assignTrainersSlice.actions
export const assignTrainersSliceReducer = assignTrainersSlice.reducer
export const selectAssignTrainers = (state: RootState) => state.assignTrainers
