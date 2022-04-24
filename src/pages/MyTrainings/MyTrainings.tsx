import React, { useEffect, useState } from 'react'
import { useStyles } from './MyTrainings.styles'

import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Title from 'components/Title/Title'
import { MyTrainingsRoutes, RouteNames } from 'routes'
import { useAuthProvider } from 'shared-files/AuthProvider/useAuthProvider'
import Error from 'components/Error/Error'

enum MyTrainingsPageTabs {
  RECENT = 0,
  TRAINING_HISTORY = 1,
  CREATE_TRAININGS = 2,
}

const MyTrainings: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { user } = useAuthProvider()
  const location = useLocation()
  const navigate = useNavigate()

  const getTabValue = (locationPathname: string) => {
    if (locationPathname.endsWith(MyTrainingsRoutes.TRAINING_HISTORY)) {
      return MyTrainingsPageTabs.TRAINING_HISTORY
    } else if (locationPathname.endsWith(MyTrainingsRoutes.CREATE_TRAININGS)) {
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
    setValue(getTabValue(location.pathname))
  }, [location])

  if (!user) {
    return <Error />
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label='trainings menu' variant='scrollable' textColor='secondary' className={classes.tabs}>
        <Tab label={'Ближчі тренування'} component={Link} to={`${RouteNames.MY_TRAININGS}/${user.uid}/${MyTrainingsRoutes.NEAREST}`} />
        <Tab label={'Історія тренуваннь'} component={Link} to={`${RouteNames.MY_TRAININGS}/${user.uid}/${MyTrainingsRoutes.TRAINING_HISTORY}`} />
        <Tab label={'Створити тренування'} component={Link} to={`${RouteNames.MY_TRAININGS}/${user.uid}/${MyTrainingsRoutes.CREATE_TRAININGS}`} />
      </Tabs>
      <Title>Мої тренування</Title>
      <Outlet />
    </>
  )
}

export default MyTrainings
