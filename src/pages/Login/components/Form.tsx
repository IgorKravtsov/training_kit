import React, { useState } from 'react'
import { useStyles } from '../login.styles'

import { UseFormReturn } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
// import FormControlLabel from '@mui/material/FormControlLabel'

import FormInput from 'components/FormInput/FormInput'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormPasswordInput from 'components/FormPasswordInput/FormPasswordInput'
import { isEmail } from 'utils/isEmail'
import { Organization } from 'api/organization/organization.types'
import { GetOrganizationByEmail } from 'api/organization/organization'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { error } from 'redux/slices/snackbarSlice'

export interface FormProps {
  formFeatures: UseFormReturn<any, any>

  onSubmit: (data: any) => void
  onError?: (error: any) => void

  isLoading?: boolean
}

const Form: React.FC<FormProps> = ({ formFeatures, onSubmit, onError, isLoading = false }): React.ReactElement => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const [isShowPass, setIsShowPass] = useState(false)
  const [organizationsOfUser, setOrganizationsOfUser] = useState<Organization[]>([])

  const {
    control,
    formState: { errors },
    watch,
    getValues,
  } = formFeatures

  watch(['email', 'password'])

  const getOrganizationsByEmail = async () => {
    //TODO: Поменять этот откровенный пи***!
    const email = getValues()?.email || ''
    if (isEmail(email)) {
      try {
        return await GetOrganizationByEmail({ email })
        // setOrganizationsOfUser(res.organizations)
      } catch (err: any) {
        dispatch(
          error({
            message: err.message,
          })
        )
        // setOrganizationsOfUser([])
      }
    }
  }

  return (
    <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit} onError={onError}>
      <Stack spacing={1.5}>
        <FormInput
          name='email'
          control={control}
          errors={errors}
          label='Пошта'
          placeholder='Уведіть пошту...'
          color={organizationsOfUser.length > 0 ? 'success' : 'primary'}
          // onBlur={e => getOrganizationsByEmail(e.target.value)}
        />

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

        <FormLoadingAutocomplete
          name='organization'
          control={control}
          errors={errors}
          label='Оберіть організацію'
          placeholder='Оберіть організацію...'
          getFunc={getOrganizationsByEmail}
          responseKey={'organizations'}
          labelKey={'title'}
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
