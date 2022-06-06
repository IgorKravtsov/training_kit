import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import { StandardTextFieldProps } from '@mui/material'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

import { ru } from 'date-fns/locale'

export interface FormAutocompleteProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<any, any>
  errors: {
    [x: string]: any
  }
  className?: string
  maxDate?: Date
  minDate?: Date
}

const FormDatePicker: React.FC<FormAutocompleteProps> = ({
  name,
  control,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  id,
  maxDate,
  minDate,
}): React.ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <MobileDatePicker
            {...field}
            label={label}
            inputFormat="dd MMMM yyyy"
            maxDate={maxDate}
            minDate={minDate}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                id={id}
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

export default FormDatePicker
