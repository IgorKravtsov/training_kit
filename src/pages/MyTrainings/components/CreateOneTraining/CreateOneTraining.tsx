import React, { useContext, useState } from 'react'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Grid from '@mui/material/Grid'

import FormDatePicker from 'components/FormDatePicker/FormDatePicker'
import FormInput from 'components/FormInput/FormInput'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormTimePicker from 'components/FormTimePicker/FormTimePicker'

import { useThemeColor } from 'shared-files/hooks'
import * as api from 'api/training/training'
import { useAppDispatch } from 'redux/hooks'
import { error, success } from 'redux/slices/snackbarSlice'
import { CreateTrainingsContext } from 'pages/MyTrainings/pages/CreateTrainings/CreateTrainingsContext'
import { useParams } from 'react-router-dom'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { useOneTrainingValidation } from './useOneTrainingValidation'

const CreateOneTraining: React.FC = (): React.ReactElement => {
  const { handleReset } = useContext(CreateTrainingsContext)
  const { user } = useAuthContext()

  const { validationSchema } = useOneTrainingValidation()
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      trainingDate: new Date(),
      trainingTime: new Date(),
    },
  })

  const { t } = useTranslation(['myTrainings'])
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const { gymId } = useParams<{ gymId: string }>()

  const {
    formState: { errors },
  } = formFeatures

  const onSubmit = async (data: SubmitData) => {
    const { title, description, trainingTime, trainingDate } = data

    const trainingDateTime = new Date(
      trainingDate.getFullYear(),
      trainingDate.getMonth(),
      trainingDate.getDate(),
      trainingTime.getHours(),
      trainingTime.getMinutes(),
      trainingTime.getSeconds(),
    )

    setIsLoading(true)
    try {
      await api.CreateOneTraining({
        title,
        description,
        trainingDateTime,
        gymId: gymId || 0,
        trainers: [user?.id || 0],
      })
      dispatch(success({ message: 'Тренування створене успішно' }))
      handleReset()
    } catch (err: any) {
      dispatch(error({ message: err.message }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit}>
        <Grid item xs={12}>
          <FormInput
            name="title"
            fullWidth
            errors={errors}
            label={t('myTrainings:createTraining.titleField.label')}
            placeholder={t('myTrainings:createTraining.titleField.placeholder')}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <FormInput
            name="description"
            multiline
            fullWidth
            rows={4}
            errors={errors}
            label={t('myTrainings:createTraining.descriptionField.label')}
            placeholder={t(
              'myTrainings:createTraining.descriptionField.placeholder',
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <Grid
            container
            direction="row"
            spacing={2}
            justifyContent="space-between"
          >
            <Grid item xs={6}>
              <FormDatePicker
                name="trainingDate"
                errors={errors}
                label={t('myTrainings:createTraining.trainingDateField.label')}
                placeholder={t(
                  'myTrainings:createTraining.trainingDateField.placeholder',
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <FormTimePicker
                name="trainingTime"
                errors={errors}
                label={t('myTrainings:createTraining.trainingTimeField.label')}
                placeholder={t(
                  'myTrainings:createTraining.trainingTimeField.placeholder',
                )}
              />
            </Grid>
          </Grid>
        </Grid>

        <LoadingButton
          sx={{ mt: 2 }}
          loading={isLoading}
          loadingPosition="start"
          type="submit"
          color={useThemeColor()}
          variant="contained"
          // className={classes.btn}
          fullWidth
          endIcon={<SendIcon />}
        >
          {t('myTrainings:createTraining.submitBtnLabel')}
        </LoadingButton>
      </FormWrapper>
    </Grid>
  )
}

export default CreateOneTraining
