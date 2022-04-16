import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'

interface LoadingState {
  loading: boolean
}

const initialState: LoadingState = {
  loading: false,
}

const loadingIndicator = createSlice({
  name: 'loadingIndicator',
  initialState,
  reducers: {
    showLoading: state => {
      state.loading = true
    },
    hideLoading: state => {
      state.loading = false
    },
  },
})

export const { showLoading, hideLoading } = loadingIndicator.actions
export const loadingIndicatorReducer = loadingIndicator.reducer
export const selectLoadingIndicator = (state: RootState) => state.loadingIndicator
