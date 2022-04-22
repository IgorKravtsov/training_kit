import React from 'react'
import { useStyles } from './cabinet.styles'

import { useAuthProvider } from 'shared-files/AuthProvider/useAuthProvider'
import Title from 'components/Title/Title'

const Cabinet: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthProvider()
  return (
    <>
      <Title>Здравствуйте, {user?.displayName}</Title>
    </>
  )
}

export default Cabinet
