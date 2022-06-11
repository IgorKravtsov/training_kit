import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  hideLoading,
  showLoading,
  selectLoadingIndicator,
} from 'redux/slices/loadingIndicatorSlice'
import { clearError, error, selectSnackbar } from 'redux/slices/snackbarSlice'
import { defaultHttpRequestConfig } from 'shared-files/constants'
import { HttpRequestConfig } from 'shared-files/interfaces'

export function useHttpRequest<Args, Req>(
  request: (...arg: Args[]) => Promise<Req | void>,
  httpRequestConfig?: Partial<HttpRequestConfig>,
): [(...args: any[]) => Promise<Req | void>, string, boolean] {
  const config: HttpRequestConfig = {
    ...defaultHttpRequestConfig,
    ...httpRequestConfig,
  }
  const { loading } = useAppSelector(selectLoadingIndicator)
  const { message } = useAppSelector(selectSnackbar)
  const dispatch = useAppDispatch()

  const method = async (...args: any[]): Promise<Req | void> => {
    try {
      config.shouldShowLoading && dispatch(showLoading())
      return await request(...args)
    } catch (err: any) {
      let message = err?.response?.data?.message
      if (err?.message === 'Network Error') {
        message = 'Помилка інтернет з`єднання'
      }

      dispatch(error({ message }))
      setTimeout(() => {
        dispatch(clearError())
      }, config.clearErrorTime)
    } finally {
      dispatch(hideLoading())
    }
  }

  return [method, message, loading]
}
