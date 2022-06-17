import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Grid, IconButton } from '@mui/material'
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded'

import FormInput from 'components/FormInput/FormInput'

const Search: React.FC = (): React.ReactElement => {
  const { t } = useTranslation(['assignLearners'])

  const {
    formState: { errors },
  } = useFormContext()

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <FormInput
          name="learner"
          errors={errors}
          label={t('assignLearners:searchFieldLabel')}
          fullWidth
          variant="standard"
        />
      </Grid>
      <IconButton aria-label="search" type="submit">
        <PersonSearchRoundedIcon />
      </IconButton>
    </Grid>
  )
}

export default Search
