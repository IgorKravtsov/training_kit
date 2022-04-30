import React from 'react'
import { UseFormReturn } from 'react-hook-form'

import SendIcon from '@mui/icons-material/Send'
import { Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormAutocomplete from 'components/FormAutocomplete/FormAutocomplete'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import FormInput from 'components/FormInput/FormInput'

import { Options } from 'pages/CreateAbonement/interfaces'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { GetTrainerGyms } from 'api/gym/gym'

import CheckboxSection from '../CheckboxSection/CheckboxSection'
import { useThemeColor } from 'shared-files/hooks'

interface FormProps {
  formFeatures: UseFormReturn<any, any>

  onSubmit: (data: any) => void
  onError?: (error: any) => void

  isLoading?: boolean
  options: Options
  setOptions: (o: Options) => void
}

const Form: React.FC<FormProps> = ({ formFeatures, onSubmit, isLoading, onError, options, setOptions }): React.ReactElement => {
  const { user } = useAuthContext()
  const {
    control,
    formState: { errors },
    watch,
  } = formFeatures

  const handleChangeOption = (value: boolean, option: keyof Options) => {
    const copy = { ...options }
    copy[option] = value
    setOptions(copy)
  }

  return (
    <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit} onError={onError}>
      <Grid container direction='column' justifyContent='center' spacing={2}>
        <Grid item xs={12}>
          <FormInput name='title' control={control} errors={errors} placeholder={'Назва абонемента...'} label={'Назва абонемента'} fullWidth />
        </Grid>

        <Grid item xs={6}>
          <FormLoadingAutocomplete
            name='gyms'
            multiple
            control={control}
            errors={errors}
            getFunc={GetTrainerGyms}
            request={{ trainerId: user?.uid || 0 }}
            responseKey='gyms'
            labelKey='title'
            placeholder={'Оберіть зал'}
            label={'Абонемент створюється для:'}
          />
        </Grid>

        <Grid item xs={6}>
          <CheckboxSection options={options} changeOption={handleChangeOption} />
        </Grid>

        <Grid item container spacing={2}>
          {options.byDays && (
            <Grid item xs={6}>
              <FormInput
                fullWidth
                name='days'
                type='number'
                control={control}
                errors={errors}
                placeholder={'Кількість днів...'}
                label={'Кількість днів'}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
          )}

          {options.byTrainings && (
            <Grid item xs={6}>
              <FormInput
                fullWidth
                name='trainings'
                type='number'
                control={control}
                errors={errors}
                placeholder={'Кількість тренувань...'}
                label={'Кількість тренувань'}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
          )}
        </Grid>

        <Grid item xs={6}>
          <FormInput
            fullWidth
            name='price'
            type='number'
            control={control}
            errors={errors}
            placeholder={'Ціна абонемента (в гривнях)...'}
            label={'Ціна абонемента (гривні)'}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton
            loading={isLoading}
            loadingPosition='start'
            type='submit'
            color={useThemeColor()}
            variant='contained'
            disabled={!options.byDays && !options.byTrainings}
            fullWidth
            endIcon={<SendIcon />}
          >
            Створити абонімент
          </LoadingButton>
        </Grid>
      </Grid>
    </FormWrapper>
  )
}

export default Form
