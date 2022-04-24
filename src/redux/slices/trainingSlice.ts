import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetUserTrainings } from 'api/training/training'
import { GetUserTrainingsRequest, GetUserTrainingsResponse, GymTraining } from 'api/training/training.types'
import { RootState } from 'redux/store'

interface TrainingState {
  trainings: GymTraining[] | null
  errors: any
}

const initialState: TrainingState = {
  trainings: null,
  errors: null,
}

export const getUserTrainings = createAsyncThunk('training/getUserTrainings', async (request: GetUserTrainingsRequest) => {
  const response: GetUserTrainingsResponse = await GetUserTrainings(request)
  return response
})

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    clearErrors(state) {
      state.errors = null
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserTrainings.fulfilled, (state, action) => {
      state.trainings = action.payload.trainings
    })
    builder.addCase(getUserTrainings.rejected, (state, action) => {
      state.errors = action.error
    })
  },
})

export const { clearErrors } = trainingSlice.actions
export const trainingReducer = trainingSlice.reducer
export const selectTraining = (state: RootState) => state.training
