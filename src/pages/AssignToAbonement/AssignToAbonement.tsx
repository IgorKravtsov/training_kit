import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Title from 'components/Title/Title'

const AssignToAbonement: React.FC = (): React.ReactElement => {
  const { t } = useTranslation(['assignToAbonement'])

  return (
    <>
      <Title>{t('assignToAbonement:title')}</Title>
      <Outlet />
    </>
  )
}

export default AssignToAbonement
