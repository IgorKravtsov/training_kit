import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

import { ru } from 'date-fns/locale'

export interface FormAutocompleteProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<any, any>
  errors: {
    [x: string]: any
  }
  className?: string
}

const FormTimePicker: React.FC<FormAutocompleteProps> = ({
  name,
  control,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  id,
}): React.ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimePicker
            {...field}
            label={label}
            renderInput={params => (
              <TextField
                {...params}
                id={id}
                fullWidth
                helperText={errors[name]?.message}
                label={label}
                error={!!errors[name]?.message}
                type={type}
                placeholder={placeholder}
                required={required}
                color='primary'
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default FormTimePicker
