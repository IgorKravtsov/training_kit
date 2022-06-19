import { useEffect } from 'react'

import { AppUser } from 'api/user/types/user.type'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import {
  logOutUser,
  selectUser,
  setError,
  setUser,
} from 'redux/slices/userSlice'

import { LanguageType } from 'shared-files/enums/LanguageType.enum'
import { UserRoles } from 'shared-files/enums'

import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { setNotificationsWithCount } from 'redux/slices/notificationSlice'

import { Organization } from 'api/organization/types'
import { $api } from 'api/_config'

import i18next from 'i18n/i18n'

export type AuthContextState = {
  user: Partial<AppUser> | null
  isAuth: boolean
  role: UserRoles
  error?: any
  selectedOrganization: Organization | null
}

export const useAuthProvider = (): AuthContextState => {
  const { user, error } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const getLoggedInUser = async () => {
    try {
      dispatch(showLoading())
      const { data } = await $api.get<AppUser>('user')

      dispatch(setUser(data))
      setUserLanguage(data.lang)
    } catch (e: any) {
      dispatch(logOutUser())
      dispatch(setError(e.message))
    } finally {
      dispatch(hideLoading())
    }
  }

  const setUserLanguage = (lang: LanguageType) => {
    i18next.changeLanguage(lang || LanguageType.Ukrainian)
  }

  useEffect(() => {
    !user && getLoggedInUser()
  }, [])

  return {
    user,
    error,
    isAuth: user !== null,
    role: user?.role || UserRoles.ANONYMOUS,
    selectedOrganization: user?.selectedOrganization || null,
  }
}
