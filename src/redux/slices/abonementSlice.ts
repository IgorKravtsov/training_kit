import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetUserAbonements } from 'api/abonements/abonements'
import { Abonement, GetUserAbonementsRequest, GetUserAbonementsResponse } from 'api/abonements/abonements.types'
import { RootState } from 'redux/store'

interface AbonementState {
  abonements: Abonement[] | null
}

const initialState: AbonementState = {
  abonements: null,
}

export const getUserAbonements = createAsyncThunk('abonement/getUserAbonements', async (request: GetUserAbonementsRequest) => {
  const response: GetUserAbonementsResponse = await GetUserAbonements(request)
  return response
})

const abonementSlice = createSlice({
  name: 'abonement',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserAbonements.fulfilled, (state, action) => {
      state.abonements = action.payload.abonements
    })
  },
})

export const {} = abonementSlice.actions
export const abonementReducer = abonementSlice.reducer
export const selectAbonement = (state: RootState) => state.abonement
