import React, { createContext, useContext } from 'react'
import { UserRoles } from 'shared-files/enums'
import { AuthContextState, useAuthProvider } from './useAuthProvider'

export const AuthContext = createContext<AuthContextState>({
  user: null,
  isAuth: false,
  role: UserRoles.ANONYMOUS,
  selectedOrganization: null,
})
export const useAuthContext = () => useContext(AuthContext)

const AuthProvider: React.FC = ({ children }): React.ReactElement => {
  const auth = useAuthProvider()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
