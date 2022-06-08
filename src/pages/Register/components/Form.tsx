import React, { useState } from 'react'
import { useStyles } from '../register.styles'

import { useFormContext } from 'react-hook-form'

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

  // const [getOrganizations] = useHttpRequest(GetOrganizations)
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
            label="Ім'я"
            placeholder="Уведіть ім'я..."
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.inputContainer}>
          <FormInput
            name="lastName"
            errors={errors}
            label="Прізвище"
            placeholder="Уведіть прізвище..."
          />
        </Grid>
      </Grid>

      <FormInput
        name="email"
        errors={errors}
        label="Пошта"
        placeholder="Уведіть пошту..."
      />

      <FormPasswordInput
        name="password"
        errors={errors}
        label="Пароль"
        placeholder="Уведіть пароль..."
        id="password"
        handleClickShowPassword={() => setIsShowPass((prevState) => !prevState)}
        visiblePassword={isShowPass}
      />

      <FormPasswordInput
        name="confirmPass"
        errors={errors}
        placeholder="Підтвердіть пароль..."
        id="confirmPass"
        handleClickShowPassword={() => setIsShowPass((prevState) => !prevState)}
        visiblePassword={isShowPass}
      />

      <FormLoadingAutocomplete
        name="organization"
        errors={errors}
        label="Оберіть організацію"
        placeholder="Оберіть організацію..."
        getFunc={GetOrganizations}
        responseKey={'organizations'}
        labelKey={'title'}
      />

      <FormDatePicker
        name="birthday"
        errors={errors}
        maxDate={new Date()}
        label="Ваша дата народження"
        placeholder="Дата народження..."
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
        Зареєструватися
      </LoadingButton>
    </Stack>
  )
}

export default Form
