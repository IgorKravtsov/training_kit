import React from 'react'
import { useForm } from 'react-hook-form'

import { Button, Grid } from '@mui/material'

import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormInput from 'components/FormInput/FormInput'
import { SearchTrainerForm } from '../interfaces'

const Search: React.FC = (): React.ReactElement => {
  const formFeatures = useForm<SearchTrainerForm>({
    defaultValues: { trainer: '' },
  })

  const {
    formState: { errors },
  } = formFeatures

  const onSubmit = async (data: SearchTrainerForm) => {}

  return (
    <Grid container>
      <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit}>
        <Grid item xs={12}>
          <FormInput
            name="trainer"
            errors={errors}
            label="Уведіть пошту або ім'я тренера"
            fullWidth
            // placeholder="Уведіть пошту..."
            // color={organizationsOfUser.length > 0 ? 'success' : 'primary'}
            // onBlur={e => getOrganizationsByEmail(e.target.value)}
          />
        </Grid>
        <Button type="submit" style={{ height: '100%', lineHeight: '3' }}>
          Пошук
        </Button>
      </FormWrapper>
    </Grid>
  )
}

export default Search
