import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LearnerAbonement } from 'api/abonements/types'
import { RootState } from 'redux/store'

interface LearnerAbonementSliceState {
  learnerAbonements: LearnerAbonement[] | null
  selectedLearnerAbonement: LearnerAbonement | null
}

const initialState: LearnerAbonementSliceState = {
  learnerAbonements: null,
  selectedLearnerAbonement: null
}

const learnerAbonementSlice = createSlice({
  name: 'learnerAbonement',
  initialState,
  reducers: {
    setLearnerAbonements(state, action: PayloadAction<LearnerAbonement[]>) {
      state.learnerAbonements = action.payload
    },
    setSelectedLearnerAbonement(state, action: PayloadAction<LearnerAbonement>) {
      state.selectedLearnerAbonement = action.payload
    }
  },
})

export const { setLearnerAbonements, setSelectedLearnerAbonement } = learnerAbonementSlice.actions
export const learnerAbonementReducer = learnerAbonementSlice.reducer
export const selectLearnerAbonement = (state: RootState) =>
  state.learnerAbonement
