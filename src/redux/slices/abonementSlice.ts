import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Abonement,
  LearnerAbonement,
} from 'api/abonements/types'
import { RootState } from 'redux/store'

interface AbonementState {
  abonements: Abonement[] | null
  learnerAbonements: LearnerAbonement[] | null
}

const initialState: AbonementState = {
  abonements: null,
  learnerAbonements: null,
}


const abonementSlice = createSlice({
  name: 'abonement',
  initialState,
  reducers: {
    setAbonements(state, action: PayloadAction<Abonement[]>) {
      state.abonements = action.payload
    },
  },

})

export const { setAbonements } = abonementSlice.actions
export const abonementReducer = abonementSlice.reducer
export const selectAbonement = (state: RootState) => state.abonement
