import React from 'react'

import MUICheckbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { CheckboxProps as MUICheckboxProps } from '@mui/material'

export interface CheckboxProps extends MUICheckboxProps {
  value: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
  label?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, label }, { ...props }): React.ReactElement => {
  return <FormControlLabel control={<MUICheckbox {...props} value={value} onChange={onChange} color='primary' />} label={label} />
}

export default Checkbox
