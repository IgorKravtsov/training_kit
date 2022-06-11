import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetLearnerAbonements } from 'api/abonements/abonements'
import {
  Abonement,
  GetLearnerAbonementsRequest,
  GetLearnerAbonementsResponse,
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

// export const getUserAbonements = createAsyncThunk<
//   LearnerAbonement[],
//   GetLearnerAbonementsRequest
// >(
//   'abonement/getUserAbonements',
//   async (request: GetLearnerAbonementsRequest) => {
//     return await GetLearnerAbonements(request)
//   },
// )

const abonementSlice = createSlice({
  name: 'abonement',
  initialState,
  reducers: {
    setAbonements(state, action: PayloadAction<Abonement[]>) {
      state.abonements = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getUserAbonements.fulfilled, (state, action) => {
  //     state.learnerAbonements = action.payload
  //   })
  // },
})

export const { setAbonements } = abonementSlice.actions
export const abonementReducer = abonementSlice.reducer
export const selectAbonement = (state: RootState) => state.abonement
