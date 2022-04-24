import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetLearnerTrainingHistory, GetUserTrainings } from 'api/training/training'
import { GetUserTrainingsRequest, GetUserTrainingsResponse, GymTraining, Training } from 'api/training/types'
import { GetLearnerTrainingHistoryRequest, GetLearnerTrainingHistoryResponse } from 'api/training/types/getTrainingHistory.type'
import { RootState } from 'redux/store'

interface TrainingState {
  trainings: GymTraining[] | null
  learnerTrainingHistory: Training[] | null
  errors: any
}

const initialState: TrainingState = {
  trainings: null,
  learnerTrainingHistory: null,
  errors: null,
}

export const getUserTrainings = createAsyncThunk('training/getUserTrainings', async (request: GetUserTrainingsRequest) => {
  const response: GetUserTrainingsResponse = await GetUserTrainings(request)
  return response
})

export const getLearnerTrainingHistory = createAsyncThunk('training/getLearnerTrainingHistory', async (request: GetLearnerTrainingHistoryRequest) => {
  const response: GetLearnerTrainingHistoryResponse = await GetLearnerTrainingHistory(request)
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
    builder
      .addCase(getUserTrainings.fulfilled, (state, action) => {
        state.trainings = action.payload.trainings
      })
      .addCase(getUserTrainings.rejected, (state, action) => {
        state.errors = action.error
      })

      .addCase(getLearnerTrainingHistory.fulfilled, (state, action) => {
        state.learnerTrainingHistory = action.payload.trainings
      })
      .addCase(getLearnerTrainingHistory.rejected, (state, action) => {
        state.errors = action.error
      })
  },
})

export const { clearErrors } = trainingSlice.actions
export const trainingReducer = trainingSlice.reducer
export const selectTraining = (state: RootState) => state.training
