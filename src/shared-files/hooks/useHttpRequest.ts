import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  hideLoading,
  showLoading,
  selectLoadingIndicator,
} from 'redux/slices/loadingIndicatorSlice'
import { clearError, error, selectSnackbar } from 'redux/slices/snackbarSlice'
import { defaultHttpRequestConfig } from 'shared-files/constants'
import { HttpRequestConfig } from 'shared-files/interfaces'

export function useHttpRequest<Args, Res>(
  request: (...arg: Args[]) => Promise<Res | void>,
  httpRequestConfig?: Partial<HttpRequestConfig<Res>>,
): [(...args: Args[]) => Promise<Res | void>, string, boolean] {
  const config: HttpRequestConfig<Res> = {
    ...defaultHttpRequestConfig,
    ...httpRequestConfig,
  }
  const { loading } = useAppSelector(selectLoadingIndicator)
  const { message } = useAppSelector(selectSnackbar)
  const dispatch = useAppDispatch()

  const method = async (...args: Args[]): Promise<Res | void> => {
    try {
      config.shouldShowLoading && dispatch(showLoading())
      const data = await request(...args)
      data && config.action && dispatch(config.action(data))

      return data
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
      config.shouldShowLoading && dispatch(hideLoading())
    }
  }

  return [method, message, loading]
}
