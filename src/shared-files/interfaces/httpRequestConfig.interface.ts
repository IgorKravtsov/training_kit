import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface HttpRequestConfig<T> {
  clearErrorTime: number
  shouldShowLoading: boolean
  action?: ActionCreatorWithPayload<Awaited<T>>
}
