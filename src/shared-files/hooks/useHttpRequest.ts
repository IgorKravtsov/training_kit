import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  hideLoading,
  showLoading,
  selectLoadingIndicator,
} from 'redux/slices/loadingIndicatorSlice'
import { clearError, error, selectSnackbar } from 'redux/slices/snackbarSlice'

export function useHttpRequest<Args, Req>(
  request: (...arg: Args[]) => Promise<Req | void>,
  clearErrorTime = 3000,
): [(...args: any[]) => Promise<Req | void>, string, boolean] {
  const { loading } = useAppSelector(selectLoadingIndicator)
  const { message } = useAppSelector(selectSnackbar)
  const dispatch = useAppDispatch()

  const method = async (...args: any[]): Promise<Req | void> => {
    try {
      dispatch(showLoading())
      const data = await request(...args)
      return data
    } catch (err: any) {
      let message = err?.response?.data?.message
      if (err?.message === 'Network Error') {
        message = 'Помилка серверу'
      }

      dispatch(error({ message }))
      setTimeout(() => {
        dispatch(clearError())
      }, clearErrorTime)
    } finally {
      dispatch(hideLoading())
    }
  }

  return [method, message, loading]
}
