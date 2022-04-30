import React from 'react'
import Grid from '@mui/material/Grid'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import { useFieldArray, useForm } from 'react-hook-form'
import FormAutocomplete from 'components/FormAutocomplete/FormAutocomplete'
import { AutocompleteOption } from 'shared-files/interfaces'
import Title from 'components/Title/Title'

const days = [
  { id: 1, label: 'Понеділок' },
  { id: 2, label: 'Вівторок' },
  { id: 3, label: 'Середа' },
  { id: 4, label: 'Четвер' },
  { id: 5, label: "П'ятниця" },
  { id: 6, label: 'Субота' },
  { id: 7, label: 'Неділя' },
]

const ScheduleTrainings: React.FC = (): React.ReactElement => {
  const formFeatures = useForm()
  const {
    control,
    formState: { errors },
  } = formFeatures

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'test', // unique name for your Field Array
  })

  const onSubmit = () => {}
  return (
    <Grid container direction='column'>
      <Title>Coming soon...</Title>
      {/* <FormWrapper onSubmit={onSubmit} formFeatures={formFeatures}>
        <FormAutocomplete
          label='Введіть бодай щось'
          placeholder='Введіть бодай щось'
          multiple
          name='name'
          options={days}
          control={control}
          errors={errors}
        />
      </FormWrapper> */}
    </Grid>
  )
}

export default ScheduleTrainings
