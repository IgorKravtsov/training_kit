import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

import { useFormLocalization } from 'shared-files/hooks'

export interface FormAutocompleteProps extends Partial<StandardTextFieldProps> {
  name: string
  errors: {
    [x: string]: any
  }
  className?: string
}

const FormTimePicker: React.FC<FormAutocompleteProps> = ({
  name,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  id,
}): React.ReactElement => {
  const { control } = useFormContext()
  const { locale } = useFormLocalization()
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimePicker
            {...field}
            label={label}
            renderInput={(params) => (
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
                color="primary"
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  )
}

export default FormTimePicker
