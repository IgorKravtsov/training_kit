import React, { useState } from 'react'
import { useStyles } from '../register.styles'

import { UseFormReturn } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import FormInput from 'components/FormInput/FormInput'
import FormWrapper from 'components/FormWrapper/FormWrapper'
// import FormAutocomplete from 'components/FormAutocomplete/FormAutocomplete'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import { GetOrganizations } from 'api/organization/organization'
import { TextField } from '@mui/material'
import FormDatePicker from 'components/FormDatePicker/FormDatePicker'

export interface FormProps {
  formFeatures: UseFormReturn<any, any>

  onSubmit: (data: any) => void
  onError?: (error: any) => void

  isLoading?: boolean
}

const Form: React.FC<FormProps> = ({ formFeatures, onSubmit, onError, isLoading = false }): React.ReactElement => {
  const classes = useStyles()

  const [isShowPass, setIsShowPass] = useState(false)

  const {
    control,
    formState: { errors },
    watch,
  } = formFeatures

  watch(['email', 'password'])

  return (
    <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit} onError={onError}>
      <Stack spacing={1.5}>
        <Grid container direction='row' spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormInput name='firstName' control={control} errors={errors} label="Ім'я" placeholder="Уведіть ім'я..." />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput name='lastName' control={control} errors={errors} label='Прізвище' placeholder='Уведіть прізвище...' />
          </Grid>
        </Grid>

        <FormInput name='email' control={control} errors={errors} label='Пошта' placeholder='Уведіть пошту...' />
        <FormInput
          name='password'
          control={control}
          errors={errors}
          label='Пароль'
          placeholder='Уведіть пароль...'
          className={classes.password}
          type={!isShowPass ? 'password' : 'text'}
        />
        <FormInput
          name='confirmPass'
          control={control}
          errors={errors}
          label='Підтвердіть пароль'
          placeholder='Підтвердіть пароль...'
          className={classes.password}
          type={!isShowPass ? 'password' : 'text'}
        />

        <FormLoadingAutocomplete
          name='organization'
          control={control}
          errors={errors}
          label='Оберіть організацію'
          placeholder='Оберіть організацію...'
          getFunc={GetOrganizations}
          responseKey={'organizations'}
          labelKey={'title'}
        />

        <FormDatePicker name='birthday' control={control} errors={errors} label='Ваша дата народження' placeholder='Оберіть організацію...' />

        <FormControlLabel
          control={<Checkbox value={isShowPass} onChange={e => setIsShowPass(e.target.checked)} color='primary' />}
          label={'Показати пароль'}
        />

        <LoadingButton
          loading={isLoading}
          loadingPosition='start'
          type='submit'
          color='primary'
          variant='contained'
          className={classes.btn}
          fullWidth
          endIcon={<SendIcon />}
        >
          Увійти
        </LoadingButton>
      </Stack>
    </FormWrapper>
  )
}

export default Form
