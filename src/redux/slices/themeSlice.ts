import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'

interface ThemeState {
  darkTheme: boolean
}

const initialState: ThemeState = {
  darkTheme: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<boolean>) {
      state.darkTheme = action.payload
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
export const selectTheme = (state: RootState) => state.theme
