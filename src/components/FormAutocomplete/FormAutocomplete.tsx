import React from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { StandardTextFieldProps, AutocompleteRenderInputParams } from '@mui/material'
import { AutocompleteOption } from 'shared-files/interfaces/autocompleteOption.interface'

export interface FormAutocompleteProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<FieldValues, any>
  errors: {
    [x: string]: any
  }
  className?: string
  options: AutocompleteOption[]
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
          renderInput={(parametrs: AutocompleteRenderInputParams) => (
            <TextField
              {...parametrs}
              helperText={errors[name]?.message}
              label={label}
              error={!!errors[name]?.message}
              type={type}
              placeholder={placeholder}
              required={required}
            />
          )}
        />
      )}
    />
  )
}

export default FormAutocomplete
