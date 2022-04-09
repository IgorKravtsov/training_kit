import { UserRoles } from 'api/user/user.types'
import { useMemo } from 'react'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectUser } from 'redux/slices/userSlice'

export const useAuth = () => {
  const { user, error } = useAppSelector(selectUser)

  const isAuth = useMemo(() => user !== null, [user])

  return {
    user,
    error,
    isAuth,
    role: user?.role || UserRoles.ANONYMOUS,
  }
}
