import React, { useState } from 'react'
import { useStyles } from '../login.styles'

import { useFormContext, useWatch } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

import { isEmail } from 'utils/isEmail'

import { GetOrganizationsByEmail } from 'api/organization/organization'

import { useAppDispatch } from 'redux/hooks/typedHooks'
import { error } from 'redux/slices/snackbarSlice'

import FormInput from 'components/FormInput/FormInput'
import FormPasswordInput from 'components/FormPasswordInput/FormPasswordInput'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import { useThemeColor } from 'shared-files/hooks'
import { useTranslation } from 'react-i18next'

interface FormProps {
  isLoading: boolean
}

const Form: React.FC<FormProps> = ({ isLoading }): React.ReactElement => {
  const classes = useStyles()

  const { t } = useTranslation(['login', 'common'])
  const dispatch = useAppDispatch()

  const [isShowPass, setIsShowPass] = useState(false)

  const {
    formState: { errors },
    control,
    getValues,
  } = useFormContext()

  useWatch({ name: ['email', 'password'], control })

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
        label={t('login:emailField.label')}
        placeholder={t('login:emailField.placeholder')}
        // color={organizationsOfUser.length > 0 ? 'success' : 'primary'}=
        // onBlur={e => getOrganizationsByEmail(e.target.value)}
      />

      <FormPasswordInput
        id="password"
        name="password"
        errors={errors}
        label={t('login:passwordField.label')}
        placeholder={t('login:passwordField.placeholder')}
        className={classes.password}
        handleClickShowPassword={() => setIsShowPass((prevState) => !prevState)}
        visiblePassword={isShowPass}
      />

      <FormLoadingAutocomplete
        name="organization"
        errors={errors}
        label={t('login:organizationField.label')}
        placeholder={t('login:organizationField.placeholder')}
        loadingText={`${t('common:loading')}...`}
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
        {t('login:loadingButtonLabel')}
      </LoadingButton>
    </Stack>
  )
}

export default Form
