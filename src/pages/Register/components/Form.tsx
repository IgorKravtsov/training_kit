import React, { useState } from 'react'
import { useStyles } from '../register.styles'

import { UseFormReturn } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import FormInput from 'components/FormInput/FormInput'
import FormWrapper from 'components/FormWrapper/FormWrapper'

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
    </FormWrapper>
  )
}

export default Form
