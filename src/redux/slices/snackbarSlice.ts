import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'

export enum SnackBarType {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

interface SnackbarState {
  openSnack?: boolean
  snackType?: SnackBarType
  message: string
}

const initialState: SnackbarState = {
  openSnack: false,
  snackType: SnackBarType.SUCCESS,
  message: 'Test',
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    success: (state, action: PayloadAction<SnackbarState>) => {
      state.openSnack = true
      state.snackType = SnackBarType.SUCCESS
      state.message = action.payload.message
    },
    error: (state, action: PayloadAction<SnackbarState>) => {
      state.openSnack = true
      state.snackType = SnackBarType.ERROR
      state.message = action.payload.message
    },
    warning: (state, action: PayloadAction<SnackbarState>) => {
      state.openSnack = true
      state.snackType = SnackBarType.WARNING
      state.message = action.payload.message
    },
    informational: (state, action: PayloadAction<SnackbarState>) => {
      state.openSnack = true
      state.snackType = SnackBarType.INFO
      state.message = action.payload.message
    },
    clear: (state, action: PayloadAction<SnackbarState>) => {
      state.openSnack = false
      state.snackType = undefined
      state.message = action.payload.message
    },
  },
})

export const { success, clear, error, informational, warning } = snackbarSlice.actions
export const snackbarReducer = snackbarSlice.reducer
export const selectSnackbar = (state: RootState) => state.snackbar
