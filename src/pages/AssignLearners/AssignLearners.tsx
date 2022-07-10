import React, { useEffect } from 'react'
import { useStyles } from './assignLearners.styles'

import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

import { Container, Grid } from '@mui/material'

import { useHttpRequest } from 'shared-files/hooks'

import Title from 'components/Title/Title'
import FormWrapper from 'components/FormWrapper/FormWrapper'

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  selectAssignLearners,
  setLearnerList,
  setRequestLearnerList,
} from 'redux/slices/assignLearnersSlice'
import { setLearnerList as setUserLearnerList } from 'redux/slices/userSlice'

import { GetLearnersToAssign, GetTrainerLearners } from 'api/user/user'

import Search from './components/Search/Search'
import LearnerList from './components/LearnerList/LearnerList'

import { SearchLearnersForm } from './interface'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

const AssignLearners: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation(['assignLearners'])
  const { user } = useAuthContext()

  const { requestLearnerList } = useAppSelector(selectAssignLearners)

  const dispatch = useAppDispatch()

  const [getLearnersToAssign] = useHttpRequest(GetLearnersToAssign)
  const [getTrainerLearners] = useHttpRequest(GetTrainerLearners, {
    action: setUserLearnerList,
  })

  const formFeatures = useForm<SearchLearnersForm>({
    defaultValues: { learner: '' },
  })

  const onSubmit = async (data: SearchLearnersForm) => {
    console.log(data)

    dispatch(
      setLearnerList(
        requestLearnerList.filter(
          (learner) =>
            learner.id !== user?.id &&
            (learner.displayName?.includes(data.learner) ||
              learner.email?.includes(data.learner)),
        ),
      ),
    )
  }

  useEffect(() => {
    const getLearners = async () => {
      await getTrainerLearners({ trainerId: user?.id || 0 }) // get all learners of the trainer
      const learnerList = await getLearnersToAssign({ learner: '' }) // get all learners that trainer can make his learner
      learnerList && dispatch(setRequestLearnerList(learnerList))
      learnerList && dispatch(setLearnerList(learnerList))
    }
    getLearners()
  }, [])

  return (
    <Container
      component="section"
      style={{ marginTop: '30px', paddingBottom: '30px' }}
    >
      {/* <Title>Coming soon...</Title> */}
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Title className={classes.title}>{t('assignLearners:title')}</Title>
        </Grid>

        <Grid item xs={12} style={{ marginTop: '10px' }}>
          <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit}>
            <Search />
          </FormWrapper>
        </Grid>

        <Grid item xs={12} style={{ marginTop: '60px' }}>
          <LearnerList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default AssignLearners
