import { useEffect } from 'react'

import { RefreshAuth } from 'api/auth/auth'
import { AppUser } from 'api/user/user.types'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { selectUser, setUser } from 'redux/slices/userSlice'

import { LanguageType } from 'shared-files/enums/LanguageType.enum'
import { LocalStorageKey, UserRoles } from 'shared-files/enums'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicator'

export type AuthContextState = {
  user: Partial<AppUser> | null
  isAuth: boolean
  role: UserRoles
  error?: any
}

export const useAuthProvider = (): AuthContextState => {
  const { user, error } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const getLoggedInUser = async () => {
    const token = localStorage.getItem(LocalStorageKey.RefreshToken)
    dispatch(showLoading())
    setTimeout(async () => {
      const userResponse = await RefreshAuth(token)
      setUserLanguage(userResponse?.lang || LanguageType.Ukrainian)
      userResponse && dispatch(setUser(userResponse))
      dispatch(hideLoading())
    }, 3000)
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
  }
}
