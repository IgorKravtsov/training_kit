import { useEffect } from 'react'

import { RefreshAuth } from 'api/auth/auth'
import { AppUser } from 'api/user/types/user.type'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { selectUser, setUser } from 'redux/slices/userSlice'

import { LanguageType } from 'shared-files/enums/LanguageType.enum'
import { LocalStorageKey, UserRoles } from 'shared-files/enums'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'
import { setNotificationsWithCount } from 'redux/slices/notificationSlice'
import { Organization } from 'api/organization/types'
import { SERVER_DELAY_TIME } from 'shared-files/constants'

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
    const token = localStorage.getItem(LocalStorageKey.RefreshToken)
    if (token) {
      dispatch(showLoading())
      setTimeout(async () => {
        const userResponse = await RefreshAuth({ refreshToken: token })
        setUserLanguage(userResponse?.user?.lang || LanguageType.Ukrainian)
        if (userResponse) {
          dispatch(setUser(userResponse.user))
          userResponse.notifications &&
            dispatch(setNotificationsWithCount({ count: userResponse.notifications?.count, notifications: userResponse.notifications?.data }))
        }
        // userResponse && dispatch(setUser(userResponse.user))
        dispatch(hideLoading())
      }, SERVER_DELAY_TIME)
    }
  }

  const setUserLanguage = (lang: LanguageType) => {
    switch (lang) {
      case LanguageType.Ukrainian:
        // i18next.changeLanguage('en-us');
        break
      case LanguageType.Russian:
        // i18next.changeLanguage('en-ca');
        break
      case LanguageType.English:
        // i18next.changeLanguage('fr-ca');
        break
    }
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
