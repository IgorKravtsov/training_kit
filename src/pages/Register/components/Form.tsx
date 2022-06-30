import React, { useState } from 'react'
import { useStyles } from '../register.styles'

import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import FormInput from 'components/FormInput/FormInput'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import FormDatePicker from 'components/FormDatePicker/FormDatePicker'
import FormPasswordInput from 'components/FormPasswordInput/FormPasswordInput'

import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectLoadingIndicator } from 'redux/slices/loadingIndicatorSlice'
import { GetOrganizations } from 'api/organization/organization'

import { useThemeColor } from 'shared-files/hooks'

const Form: React.FC = (): React.ReactElement => {
  const classes = useStyles()

  const { t } = useTranslation(['register', 'common'])

  const { loading: isLoading } = useAppSelector(selectLoadingIndicator)

  const [isShowPass, setIsShowPass] = useState(false)
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Stack spacing={1.5}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={12} sm={6} className={classes.inputContainer}>
          <FormInput
            name="name"
            errors={errors}
            label={t('register:nameField.label')}
            placeholder={t('register:nameField.placeholder')}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.inputContainer}>
          <FormInput
            name="lastName"
            errors={errors}
            label={t('register:lastNameField.label')}
            placeholder={t('register:lastNameField.placeholder')}
          />
        </Grid>
      </Grid>

      <FormInput
        name="email"
        errors={errors}
        label={t('register:emailField.label')}
        placeholder={t('register:emailField.placeholder')}
      />

      <FormPasswordInput
        name="password"
        errors={errors}
        label={t('register:passwordField.label')}
        placeholder={t('register:passwordField.placeholder')}
        id="password"
        handleClickShowPassword={() => setIsShowPass((prevState) => !prevState)}
        visiblePassword={isShowPass}
      />

      <FormPasswordInput
        name="confirmPass"
        errors={errors}
        placeholder={t('register:confirmPassField.placeholder')}
        id="confirmPass"
        handleClickShowPassword={() => setIsShowPass((prevState) => !prevState)}
        visiblePassword={isShowPass}
      />

      <FormLoadingAutocomplete
        name="organization"
        errors={errors}
        label={t('register:organizationField.label')}
        placeholder={t('register:organizationField.placeholder')}
        loadingText={`${t('common:loading')}...`}
        getFunc={GetOrganizations}
        responseKey={'organizations'}
        labelKey={'title'}
      />

      <FormDatePicker
        name="birthday"
        errors={errors}
        maxDate={new Date()}
        label={t('register:dobField.label')}
        placeholder={t('register:dobField.placeholder')}
      />

      <LoadingButton
        loading={isLoading}
        loadingPosition="start"
        type="submit"
        color={useThemeColor()}
        variant="contained"
        className={classes.btn}
        fullWidth
        endIcon={<SendIcon />}
      >
        {t('register:loadingButtonLabel')}
      </LoadingButton>
    </Stack>
  )
}

export default Form
