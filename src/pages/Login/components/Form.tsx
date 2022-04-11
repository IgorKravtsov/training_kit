import React, { useState } from 'react'
import { useStyles } from '../login.styles'

import { UseFormReturn } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel'

import FormInput from 'components/FormInput/FormInput'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormPasswordInput from 'components/FormPasswordInput/FormPasswordInput'
import FormAutocomplete from 'components/FormAutocomplete/FormAutocomplete'

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
    getValues,
  } = formFeatures

  watch(['email', 'password'])

  return (
    <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit} onError={onError}>
      <Stack spacing={1.5}>
        <FormInput name='email' control={control} errors={errors} label='Пошта' placeholder='Уведіть пошту...' />

        <FormPasswordInput
          id='password'
          name='password'
          control={control}
          errors={errors}
          placeholder='Уведіть пароль...'
          className={classes.password}
          handleClickShowPassword={() => setIsShowPass(prevState => !prevState)}
          visiblePassword={isShowPass}
        />

        <FormAutocomplete
          name='organization'
          control={control}
          errors={errors}
          placeholder='Виберіть організацію...'
          label='Організація'
          options={[]}
          customNoOptionsText='Для оновлення даних введіть Вашу пошту'
          disabled={!getValues().email}
        />

        <LoadingButton
          loading={isLoading}
          loadingPosition='start'
          type='submit'
          color='secondary'
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
