import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material'

export interface FormInputProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<any, any>
  errors: {
    [x: string]: any
  }
  className?: string
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  ...otherProps
}): React.ReactElement => {
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
          color='primary'
        />
      )}
    />
  )
}

export default FormInput
