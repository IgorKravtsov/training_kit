import { UserRoles } from 'api/user/user.types'
import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectUser } from 'redux/slices/userSlice'

export const useAuth = () => {
  const { user, error } = useAppSelector(selectUser)

  return {
    user,
    error,
    isAuth: user !== null,
    role: user?.role || UserRoles.ANONYMOUS,
  }
}
