import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetTrainerGyms } from 'api/gym/gym'
import {
  GetTrainerGymsRequest,
  GetTrainerGymsResponse,
  Gym,
} from 'api/gym/types'
import { RootState } from 'redux/store'

interface GymState {
  gyms: Gym[] | null
}

const initialState: GymState = {
  gyms: null,
}

// export const getLearnerGyms = createAsyncThunk('gym/getLearnerGyms', async (request: GetLearnerGymsRequest) => {
//   const response: GetLearnerGymsResponse = await GetLearnerGyms(request)
//   return response
// })

export const getTrainerGyms = createAsyncThunk(
  'gym/getTrainerGyms',
  async (request: GetTrainerGymsRequest) => {
    const response: GetTrainerGymsResponse = await GetTrainerGyms(request)
    return response
  },
)

const gymSlice = createSlice({
  name: 'gym',
  initialState,
  reducers: {
    setLearnerGyms(state, action: PayloadAction<Gym[]>) {
      state.gyms = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   // builder.addCase(getLearnerGyms.fulfilled, (state, action) => {
  //   //   state.gyms = action.payload.gyms
  //   // })
  // },
})

export const { setLearnerGyms } = gymSlice.actions
export const gymReducer = gymSlice.reducer
export const selectGym = (state: RootState) => state.gym
