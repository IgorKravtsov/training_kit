import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from 'shared-files/interfaces/menuItem'
import { RootState } from 'redux/store'

interface SidebarState {
  drawerList: MenuItem[]
}

const initialState: SidebarState = {
  drawerList: [],
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setDrawerList(state, action: PayloadAction<MenuItem[]>) {
      state.drawerList = action.payload
    },
  },
})

export const { setDrawerList } = sidebarSlice.actions
export const sidebarReducer = sidebarSlice.reducer
export const selectSidebar = (state: RootState) => state.sidebar
