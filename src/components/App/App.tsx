import React, { useEffect, useState } from 'react'
import './App.css'
// import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from 'redux/hooks/typedHooks'
// import { logOutUser, setUser } from 'redux/slices/userSlice'
import Header from 'components/Header/Header'
import AppLayout from 'shared-files/AppLayout'
import { setUser } from 'redux/slices/userSlice'
import { UserRoles, AppUser } from 'api/user/user.types'
// import { transformUser } from 'utils/transformUser'
// import { getUserByEmail } from 'api/user/user'
// import { auth } from 'config/firebase.config'

const App: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(setUser({ role: UserRoles.LEARNER } as AppUser))
  }, [])

  return (
    <>
      <Header />
      <AppLayout />
    </>
  )
}

export default App
