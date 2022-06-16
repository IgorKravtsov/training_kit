import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

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

const Form: React.FC<FormProps> = ({
  formFeatures,
  onSubmit,
  isLoading,
  onError,
  options,
  setOptions,
}): React.ReactElement => {
  const { user } = useAuthContext()
  const { t } = useTranslation(['createAbonement'])
  
  const {
    formState: { errors },
  } = formFeatures

  const handleChangeOption = (value: boolean, option: keyof Options) => {
    const copy = { ...options }
    copy[option] = value
    setOptions(copy)
  }

  return (
    <FormWrapper
      formFeatures={formFeatures}
      onSubmit={onSubmit}
      onError={onError}
    >
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <FormInput
            name="title"
            errors={errors}
            label={t('createAbonement:titleField.label')}
            placeholder={t('createAbonement:titleField.placeholder')}
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <FormLoadingAutocomplete
            name="gyms"
            multiple
            errors={errors}
            getFunc={GetTrainerGyms}
            request={{ trainerId: user?.id || 0 }}
            responseKey="gyms"
            labelKey="title"
            label={t('createAbonement:gymsField.label')}
            placeholder={t('createAbonement:gymsField.placeholder')}
          />
        </Grid>

        <Grid item xs={6}>
          <CheckboxSection
            options={options}
            changeOption={handleChangeOption}
          />
        </Grid>

        <Grid item container spacing={2}>
          {options.byDays && (
            <Grid item xs={6}>
              <FormInput
                fullWidth
                name="days"
                type="number"
                errors={errors}
                label={t('createAbonement:daysField.label')}
                placeholder={t('createAbonement:daysField.placeholder')}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
          )}

          {options.byTrainings && (
            <Grid item xs={6}>
              <FormInput
                fullWidth
                name="trainings"
                type="number"
                errors={errors}
                label={t('createAbonement:trainingsField.label')}
                placeholder={t('createAbonement:trainingsField.placeholder')}
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
          )}
        </Grid>

        <Grid item xs={6}>
          <FormInput
            fullWidth
            name="price"
            type="number"
            errors={errors}
            label={t('createAbonement:priceField.label')}
            placeholder={t('createAbonement:priceField.placeholder')}
          />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            type="submit"
            color={useThemeColor()}
            variant="contained"
            disabled={!options.byDays && !options.byTrainings}
            fullWidth
            endIcon={<SendIcon />}
          >
            {t('createAbonement:submitBtnLabel')}
          </LoadingButton>
        </Grid>
      </Grid>
    </FormWrapper>
  )
}

export default Form
