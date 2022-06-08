import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  hideLoading,
  showLoading,
  selectLoadingIndicator,
} from 'redux/slices/loadingIndicatorSlice'
import { clearError, error, selectSnackbar } from 'redux/slices/snackbarSlice'

export function useHttpRequest<T>(
  request: (...arg: any[]) => Promise<T | void>,
  clearErrorTime = 3000,
): [(...args: any[]) => Promise<T | void>, string, boolean] {
  const { loading } = useAppSelector(selectLoadingIndicator)
  const { message } = useAppSelector(selectSnackbar)
  const dispatch = useAppDispatch()

  const method = async (...args: any[]): Promise<T | void> => {
    try {
      dispatch(showLoading())
      return await request(...args)
    } catch (err: any) {
      dispatch(error({ message: err.response.data.message }))
      setTimeout(() => {
        dispatch(clearError())
      }, clearErrorTime)
    } finally {
      dispatch(hideLoading())
    }
  }

  return [method, message, loading]
}
