import React, { useEffect, useState } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { StandardTextFieldProps, AutocompleteRenderInputParams } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { AutocompleteOption } from 'shared-files/interfaces/autocompleteOption.interface'

export interface FormLoadingAutocompleteProps extends Partial<StandardTextFieldProps> {
  name: string
  control: Control<FieldValues, any>
  errors: {
    [x: string]: any
  }
  className?: string
  getFunc: (request?: any) => Promise<any>
  request?: any
  labelKey?: string
  responseKey: string
  loadingText?: string
  openText?: string
}

const FormLoadingAutocomplete: React.FC<FormLoadingAutocompleteProps> = (
  {
    name,
    control,
    errors,
    className,
    label,
    placeholder,
    type,
    required,
    getFunc,
    request,
    labelKey = 'label',
    responseKey = '',
    id,
    loadingText = 'Завантаження...',
    openText = '',
  },
  { ...otherProps }
): React.ReactElement => {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<AutocompleteOption[]>([])
  const loading = open && options.length === 0

  useEffect(() => {
    let active = true
    if (!loading) {
      return undefined
    }

    ;(async () => {
      const response = await getFunc(request)

      if (active) {
        setOptions(response[responseKey].map((item: any) => ({ label: item[labelKey], ...item })))
      }
    })()

    return () => {
      active = false
    }
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

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
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          loading={loading}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          getOptionLabel={option => option.label}
          loadingText={loadingText}
          openText={openText}
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
              {...otherProps}
              InputProps={{
                ...parametrs.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color='inherit' size={20} /> : null}
                    {parametrs.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      )}
    />
  )
}

export default FormLoadingAutocomplete
