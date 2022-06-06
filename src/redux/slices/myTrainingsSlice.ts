import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetTrainerGyms } from 'api/gym/gym'
import {
  GetTrainerGymsRequest,
  GetTrainerGymsResponse,
  Gym,
} from 'api/gym/types'
import { GetLearnerTrainingHistory } from 'api/training/training'
import {
  GetLearnerTrainingHistoryRequest,
  GetLearnerTrainingHistoryResponse,
  Training,
} from 'api/training/types'
import { RootState } from 'redux/store'
import { Id } from 'shared-files/types'

export enum CreationType {
  One = 'one',
  Many = 'many',
}

interface MyTrainingsState {
  trainerGyms: Gym[] | null
  learnerTrainingHistory: Training[] | null
  selectedGymId: Id | null
  selectedCreationType: CreationType | null
  errors: any
}

const initialState: MyTrainingsState = {
  trainerGyms: null,
  learnerTrainingHistory: null,
  selectedGymId: null,
  selectedCreationType: null,
  errors: null,
}

export const getLearnerTrainingHistory = createAsyncThunk<
  GetLearnerTrainingHistoryResponse,
  GetLearnerTrainingHistoryRequest
>(
  'myTrainings/getLearnerTrainingHistory',
  async (request: GetLearnerTrainingHistoryRequest) => {
    return await GetLearnerTrainingHistory(request)
  },
)

export const getTrainerGyms = createAsyncThunk<
  GetTrainerGymsResponse,
  GetTrainerGymsRequest
>('myTrainings/getTrainerGyms', async (request: GetTrainerGymsRequest) => {
  return await GetTrainerGyms(request)
})

const myTrainingsSlice = createSlice({
  name: 'myTrainings',
  initialState,
  reducers: {
    setSelectedGym(state, action: PayloadAction<Id>) {
      state.selectedGymId = action.payload
    },
    clearSelectedGym(state) {
      state.selectedGymId = null
    },

    setSelectedCreationType(state, action: PayloadAction<CreationType>) {
      state.selectedCreationType = action.payload
    },
    clearSelectedCreationType(state) {
      state.selectedCreationType = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLearnerTrainingHistory.fulfilled, (state, action) => {
        state.learnerTrainingHistory = action.payload.trainings
      })
      .addCase(getLearnerTrainingHistory.rejected, (state, action) => {
        state.errors = action.error
      })

      .addCase(getTrainerGyms.fulfilled, (state, action) => {
        state.trainerGyms = action.payload.gyms
      })
      .addCase(getTrainerGyms.rejected, (state, action) => {
        state.errors = action.error
      })
  },
})

export const {
  setSelectedCreationType,
  setSelectedGym,
  clearSelectedCreationType,
  clearSelectedGym,
} = myTrainingsSlice.actions
export const myTrainingReducer = myTrainingsSlice.reducer
export const selectMyTrainings = (state: RootState) => state.myTrainings
