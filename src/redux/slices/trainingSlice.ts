import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetUserTrainings, MarkVisitingTraining } from 'api/training/training'
import {
  GetUserTrainingsRequest,
  GetUserTrainingsResponse,
  GymTraining,
  MarkVisitingTrainingRequest,
  MarkVisitingTrainingResponse,
} from 'api/training/types'
import { RootState } from 'redux/store'

interface TrainingState {
  trainings: GymTraining[] | null
  errors: any
}

const initialState: TrainingState = {
  trainings: null,
  errors: null,
}

export const getUserTrainings = createAsyncThunk<
  GetUserTrainingsResponse,
  GetUserTrainingsRequest
>('training/getUserTrainings', async (request) => {
  return await GetUserTrainings(request)
})

export const markVisitTraining = createAsyncThunk<
  MarkVisitingTrainingResponse,
  MarkVisitingTrainingRequest
>('training/markVisit', async (request) => {
  return await MarkVisitingTraining(request)
})

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    clearErrors(state) {
      state.errors = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserTrainings.fulfilled, (state, action) => {
        state.trainings = action.payload.trainings
      })
      .addCase(getUserTrainings.rejected, (state, action) => {
        state.errors = action.error
      })
  },
})

export const { clearErrors } = trainingSlice.actions
export const trainingReducer = trainingSlice.reducer
export const selectTraining = (state: RootState) => state.training
