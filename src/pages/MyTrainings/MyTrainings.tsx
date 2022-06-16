import React, { useEffect, useState } from 'react'
import { useStyles } from './MyTrainings.styles'

import { useTranslation } from 'react-i18next'

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import Error from 'components/Error/Error'
import { UserRoles } from 'shared-files/enums'

enum MyTrainingsPageTabs {
  RECENT = 0,
  TRAINING_HISTORY = 1,
  CREATE_TRAININGS = 2,
}

const MyTrainings: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { user, role } = useAuthContext()

  const { t } = useTranslation(['myTrainings'])
  const location = useLocation()
  const navigate = useNavigate()

  const hasTrainers = user?.trainers && user?.trainers?.length > 0

  const getTabValue = (locationPathname: string) => {
    if (locationPathname.includes(MyTrainingsRoutes.TRAINING_HISTORY)) {
      return MyTrainingsPageTabs.TRAINING_HISTORY
    } else if (locationPathname.includes(MyTrainingsRoutes.CREATE_TRAININGS)) {
      return MyTrainingsPageTabs.CREATE_TRAININGS
    } else {
      return MyTrainingsPageTabs.RECENT
    }
  }
  const [value, setValue] = useState(getTabValue(location.pathname))

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (!hasTrainers && role === UserRoles.LEARNER) {
      navigate(`${RouteNames.ASSIGN_TRAINERS}/${user?.id || 0}`, {
        replace: true,
      })
    } else if (!hasTrainers) {
      navigate(
        `${RouteNames.MY_TRAININGS}/${user?.id || 0}/${
          MyTrainingsRoutes.CREATE_TRAININGS
        }`,
        {
          replace: true,
        },
      )
    }
  }, [])

  useEffect(() => {
    setValue(getTabValue(location.pathname))
  }, [location])

  if (!user) {
    return <Error />
  }

  return (
    <div className={classes.wrapper}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="trainings menu"
        variant="scrollable"
        className={classes.tabs}
      >
        {hasTrainers && (
          <>
            <Tab
              label={t('myTrainings:tabs.nearest')}
              component={Link}
              to={`${RouteNames.MY_TRAININGS}/${user.id}/${MyTrainingsRoutes.NEAREST}`}
            />
            <Tab
              label={t('myTrainings:tabs.history')}
              component={Link}
              to={`${RouteNames.MY_TRAININGS}/${user.id}/${MyTrainingsRoutes.TRAINING_HISTORY}`}
            />
          </>
        )}
        {(user.role === UserRoles.TRAINER || user.role === UserRoles.ADMIN) && (
          <Tab
            label={t('myTrainings:tabs.createTraining')}
            component={Link}
            to={`${RouteNames.MY_TRAININGS}/${user.id}/${MyTrainingsRoutes.CREATE_TRAININGS}`}
          />
        )}
      </Tabs>
      <Outlet />
    </div>
  )
}

export default MyTrainings
