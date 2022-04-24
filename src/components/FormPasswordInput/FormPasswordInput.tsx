import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'

import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import IconButton from '@mui/material/IconButton'

import { StandardTextFieldProps } from '@mui/material'

export interface FormPasswordInputProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<FieldValues, any>
  errors: {
    [x: string]: any
  }
  className?: string
  handleClickShowPassword: () => void
  visiblePassword: boolean
  id: string
}

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  name,
  control,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  handleClickShowPassword,
  visiblePassword,
  id,
}): React.ReactElement => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <OutlinedInput
            {...field}
            id={id}
            placeholder={placeholder}
            type={visiblePassword ? 'text' : 'password'}
            error={!!errors[name]?.message}
            fullWidth
            required={required}
            className={className}
            color='primary'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={e => e.preventDefault()}
                  edge='end'
                >
                  {visiblePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />
      {errors[name]?.message && (
        <FormHelperText style={{ color: '#d32f2f', marginLeft: '14px' }} id={id}>
          {errors[name]?.message}
        </FormHelperText>
      )}
    </>
  )
}

export default FormPasswordInput
