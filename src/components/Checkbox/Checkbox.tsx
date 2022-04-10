import React from 'react'

import MUICheckbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

export interface CheckboxProps {
  value: boolean
  onChange: () => void
  label?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, label }): React.ReactElement => {
  return <FormControlLabel control={<MUICheckbox value={value} onChange={onChange} color='primary' />} label={label} />
}

export default Checkbox
