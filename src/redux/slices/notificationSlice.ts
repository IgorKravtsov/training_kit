import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Notification } from 'api/notification/types'
import { RootState } from 'redux/store'

interface NotificationState {
  notifications: Notification[] | null
  notificationCount: number | null
}

const initialState: NotificationState = {
  notifications: null,
  notificationCount: null,
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.notifications = action.payload
    },
    setNotificationCount(state, action: PayloadAction<number>) {
      state.notificationCount = action.payload
    },
    setNotificationsWithCount(state, action: PayloadAction<{ notifications: Notification[]; count: number }>) {
      state.notifications = action.payload.notifications
      state.notificationCount = action.payload.count
    },
  },
})

export const { setNotificationCount, setNotifications, setNotificationsWithCount } = notificationSlice.actions
export const notificationReducer = notificationSlice.reducer
export const selectNotification = (state: RootState) => state.notification
