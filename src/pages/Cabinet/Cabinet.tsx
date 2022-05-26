import React from 'react'
import { useStyles } from './cabinet.styles'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import Title from 'components/Title/Title'

const Cabinet: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user } = useAuthContext()
  return (
    <>
      <Title>Здравствуйте, {user?.displayName}</Title>
    </>
  )
}

export default Cabinet
