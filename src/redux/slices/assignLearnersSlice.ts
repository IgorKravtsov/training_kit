import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PublicAppUserDto } from 'api/user/types'
import { RootState } from 'redux/store'

interface AssignLearnersSliceState {
  appLearnerList: PublicAppUserDto[]
  requestLearnerList: PublicAppUserDto[]
}

const initialState: AssignLearnersSliceState = {
  appLearnerList: [],
  requestLearnerList: [],
}

const assignLearners = createSlice({
  name: 'assignLearners',
  initialState,
  reducers: {
    setLearnerList(state, action: PayloadAction<PublicAppUserDto[]>) {
      state.appLearnerList = action.payload
    },
    setRequestLearnerList(state, action: PayloadAction<PublicAppUserDto[]>) {
      state.requestLearnerList = action.payload
    },
  },
})

export const { setLearnerList, setRequestLearnerList } = assignLearners.actions
export const assignLearnersReducer = assignLearners.reducer
export const selectAssignLearners = (state: RootState) => state.assignLearners
