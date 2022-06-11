import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Grid, IconButton } from '@mui/material'
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded'

import FormInput from 'components/FormInput/FormInput'

const Search: React.FC = (): React.ReactElement => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <FormInput
          name="trainer"
          errors={errors}
          label="Уведіть пошту або ім'я тренера"
          fullWidth
          variant="standard"
          // placeholder="Уведіть пошту..."
          // color={organizationsOfUser.length > 0 ? 'success' : 'primary'}
          // onBlur={e => getOrganizationsByEmail(e.target.value)}
        />
      </Grid>
      <IconButton aria-label="search" type="submit">
        <PersonSearchRoundedIcon />
      </IconButton>
    </Grid>
  )
}

export default Search
