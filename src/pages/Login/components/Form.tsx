import React, { useState } from 'react'
import { useStyles } from '../login.styles'

import { useFormContext, UseFormReturn } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

import { isEmail } from 'utils/isEmail'

import { GetOrganizationsByEmail } from 'api/organization/organization'
import { Organization } from 'api/organization/types'

import { useAppDispatch, useAppSelector } from 'redux/hooks/typedHooks'
import { error } from 'redux/slices/snackbarSlice'
import { selectLoadingIndicator } from 'redux/slices/loadingIndicatorSlice'

import FormInput from 'components/FormInput/FormInput'
import FormPasswordInput from 'components/FormPasswordInput/FormPasswordInput'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import { useThemeColor } from 'shared-files/hooks'

interface FormProps {
  isLoading: boolean
}

const Form: React.FC<FormProps> = ({ isLoading }): React.ReactElement => {
  const classes = useStyles()

  const dispatch = useAppDispatch()

  const [isShowPass, setIsShowPass] = useState(false)
  // const [organizationsOfUser, setOrganizationsOfUser] = useState<
  //   Organization[]
  // >([])

  const {
    formState: { errors },
    watch,
    getValues,
  } = useFormContext()

  watch(['email', 'password'])

  const getOrganizationsByEmail = async () => {
    //TODO: Поменять этот откровенный пи***!
    const email = getValues()?.email || ''
    if (isEmail(email)) {
      try {
        return await GetOrganizationsByEmail({ email })
        // setOrganizationsOfUser(res.organizations)
      } catch (err: any) {
        dispatch(
          error({
            message: err.message,
          }),
        )
        // setOrganizationsOfUser([])
      }
    }
  }

  return (
    <Stack spacing={1.5}>
      <FormInput
        name="email"
        errors={errors}
        label="Пошта"
        placeholder="Уведіть пошту..."
        // color={organizationsOfUser.length > 0 ? 'success' : 'primary'}
        // onBlur={e => getOrganizationsByEmail(e.target.value)}
      />

      <FormPasswordInput
        id="password"
        name="password"
        errors={errors}
        placeholder="Уведіть пароль..."
        className={classes.password}
        handleClickShowPassword={() => setIsShowPass((prevState) => !prevState)}
        visiblePassword={isShowPass}
      />

      <FormLoadingAutocomplete
        name="organization"
        errors={errors}
        label="Оберіть організацію"
        placeholder="Оберіть організацію..."
        getFunc={getOrganizationsByEmail}
        responseKey={'organizations'}
        labelKey={'title'}
      />

      <LoadingButton
        loading={isLoading}
        loadingPosition="start"
        type="submit"
        variant="contained"
        className={classes.btn}
        color={useThemeColor()}
        fullWidth
        endIcon={<SendIcon />}
      >
        Увійти
      </LoadingButton>
    </Stack>
  )
}

export default Form
