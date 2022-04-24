import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { StandardTextFieldProps, AutocompleteRenderInputParams } from '@mui/material'
import { AutocompleteOption } from 'shared-files/interfaces'

export interface FormAutocompleteProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<FieldValues, any>
  errors: {
    [x: string]: any
  }
  className?: string
  options: AutocompleteOption[]
  customNoOptionsText?: string
}

const FormAutocomplete: React.FC<FormAutocompleteProps> = ({
  name,
  control,
  errors,
  className,
  label,
  placeholder,
  type,
  required,
  options,
  id,
  customNoOptionsText,
  disabled,
}): React.ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          disablePortal
          id={id}
          options={options}
          className={className}
          onChange={(_, data) => onChange(data)}
          loadingText='Завантаження'
          noOptionsText={customNoOptionsText || 'Немає даних'}
          disabled={disabled}
          renderInput={(parametrs: AutocompleteRenderInputParams) => (
            <TextField
              {...parametrs}
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
  )
}

export default FormAutocomplete
