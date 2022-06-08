import React from 'react'
import { Controller } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material'

export interface FormInputProps extends Partial<StandardTextFieldProps> {
  name: string
  errors: {
    [x: string]: any
  }
  className?: string
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  ...otherProps
}): React.ReactElement => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...otherProps}
          label={label}
          placeholder={placeholder}
          type={type}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message}
          // fullWidth
          required={required}
          className={className}
          color="primary"
        />
      )}
    />
  )
}

export default FormInput
