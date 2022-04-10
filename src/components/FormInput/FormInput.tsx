import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material'

export interface FormInputProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<FieldValues, any>
  errors: {
    [x: string]: any
  }
  className?: string
}

const FormInput: React.FC<FormInputProps> = ({ name, control, errors, className, label, placeholder, type, required }): React.ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          placeholder={placeholder}
          type={type}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message}
          fullWidth
          required={required}
          className={className}
        />
      )}
    />
  )
}

export default FormInput
