import React, { useContext, useState } from 'react'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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

const CreateOneTraining: React.FC = (): React.ReactElement => {
  const { handleReset } = useContext(CreateTrainingsContext)
  const { user } = useAuthContext()
  const validationSchema = yup.object({
    title: yup.string().trim().required('Це поле має бути заповнено'),
    description: yup.string().trim(),
    trainingDate: yup.date().required('Це поле має бути заповнено'),
    trainingTime: yup.date().required('Це поле має бути обрано'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>
  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      trainingDate: new Date(),
      trainingTime: new Date(),
    },
  })
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const { gymId } = useParams<{ gymId: string }>()

  const {
    control,
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
            control={control}
            label="Назва тренування"
            placeholder="Уведіть назву (бажано комбінувати з групою)..."
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <FormInput
            name="description"
            multiline
            fullWidth
            rows={4}
            errors={errors}
            control={control}
            label="Опис тренування (не обов'язково)"
            placeholder="Опис..."
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
                control={control}
                errors={errors}
                label="Дата тренування"
                placeholder="Дата тренування..."
              />
            </Grid>

            <Grid item xs={6}>
              <FormTimePicker
                name="trainingTime"
                control={control}
                errors={errors}
                label="Час тренування"
                placeholder="Час тренування..."
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
          Створити тренування
        </LoadingButton>
      </FormWrapper>
    </Grid>
  )
}

export default CreateOneTraining
