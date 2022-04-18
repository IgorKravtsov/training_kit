import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetLearnerGyms } from 'api/gym/gym'
import { GetLearnerGymsRequest, GetLearnerGymsResponse, Gym } from 'api/gym/gym.types'
import { RootState } from 'redux/store'

interface GymState {
  gyms: Gym[] | null
}

const initialState: GymState = {
  gyms: null,
}

export const getLearnerGyms = createAsyncThunk('gym/getLearnerGyms', async (request: GetLearnerGymsRequest) => {
  const response: GetLearnerGymsResponse = await GetLearnerGyms(request)
  return response
})

const gymSlice = createSlice({
  name: 'gym',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLearnerGyms.fulfilled, (state, action) => {
      state.gyms = action.payload.gyms
    })
  },
})

export const {} = gymSlice.actions
export const gymReducer = gymSlice.reducer
export const selectGym = (state: RootState) => state.gym
