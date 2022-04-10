import React, { useState } from 'react'
import { useStyles } from '../register.styles'

import { UseFormReturn } from 'react-hook-form'

import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import FormInput from 'components/FormInput/FormInput'
import FormWrapper from 'components/FormWrapper/FormWrapper'
import FormAutocomplete from 'components/FormAutocomplete/FormAutocomplete'
import FormLoadingAutocomplete from 'components/FormLoadingAutocomplete/FormLoadingAutocomplete'
import { GetOrganizations } from 'api/organization/organization'

export interface FormProps {
  formFeatures: UseFormReturn<any, any>

  onSubmit: (data: any) => void
  onError?: (error: any) => void

  isLoading?: boolean
}

const Form: React.FC<FormProps> = ({ formFeatures, onSubmit, onError, isLoading = false }): React.ReactElement => {
  const classes = useStyles()

  const [isShowPass, setIsShowPass] = useState(false)

  const {
    control,
    formState: { errors },
    watch,
  } = formFeatures

  watch(['email', 'password'])

  const getOrganizations = () => {}

  return (
    <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit} onError={onError}>
      <Stack spacing={1}>
        <Grid container direction='row' spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormInput name='firstName' control={control} errors={errors} label="Ім'я" placeholder="Уведіть ім'я..." />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput name='lastName' control={control} errors={errors} label='Прізвище' placeholder='Уведіть прізвище...' />
          </Grid>
        </Grid>

        <FormInput name='email' control={control} errors={errors} label='Пошта' placeholder='Уведіть пошту...' />
        <FormInput
          name='password'
          control={control}
          errors={errors}
          label='Пароль'
          placeholder='Уведіть пароль...'
          className={classes.password}
          type={!isShowPass ? 'password' : 'text'}
        />
        <FormInput
          name='confirmPass'
          control={control}
          errors={errors}
          label='Підтвердіть пароль'
          placeholder='Підтвердіть пароль...'
          className={classes.password}
          type={!isShowPass ? 'password' : 'text'}
        />

        <FormLoadingAutocomplete
          name='organization'
          control={control}
          errors={errors}
          label='Оберіть організацію'
          placeholder='Оберіть організацію...'
          getFunc={GetOrganizations}
          responseKey={'organizations'}
          labelKey={'title'}
        />

        <FormControlLabel
          control={<Checkbox value={isShowPass} onChange={e => setIsShowPass(e.target.checked)} color='primary' />}
          label={'Показати пароль'}
        />

        <LoadingButton
          loading={isLoading}
          loadingPosition='start'
          type='submit'
          color='primary'
          variant='contained'
          className={classes.btn}
          fullWidth
          endIcon={<SendIcon />}
        >
          Увійти
        </LoadingButton>
      </Stack>
    </FormWrapper>
  )
}

const top100Films = [
  { label: 'The Shawshank Redemption', value: 1994 },
  { label: 'The Godfather', value: 1972 },
  { label: 'The Godfather: Part II', value: 1974 },
  { label: 'The Dark Knight', value: 2008 },
  { label: '12 Angry Men', value: 1957 },
  { label: "Schindler's List", value: 1993 },
  { label: 'Pulp Fiction', value: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    value: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', value: 1966 },
  { label: 'Fight Club', value: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    value: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    value: 1980,
  },
  { label: 'Forrest Gump', value: 1994 },
  { label: 'Inception', value: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    value: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", value: 1975 },
  { label: 'Goodfellas', value: 1990 },
  { label: 'The Matrix', value: 1999 },
  { label: 'Seven Samurai', value: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    value: 1977,
  },
  { label: 'City of God', value: 2002 },
  { label: 'Se7en', value: 1995 },
  { label: 'The Silence of the Lambs', value: 1991 },
  { label: "It's a Wonderful Life", value: 1946 },
  { label: 'Life Is Beautiful', value: 1997 },
  { label: 'The Usual Suspects', value: 1995 },
  { label: 'Léon: The Professional', value: 1994 },
  { label: 'Spirited Away', value: 2001 },
  { label: 'Saving Private Ryan', value: 1998 },
  { label: 'Once Upon a Time in the West', value: 1968 },
  { label: 'American History X', value: 1998 },
  { label: 'Interstellar', value: 2014 },
  { label: 'Casablanca', value: 1942 },
  { label: 'City Lights', value: 1931 },
  { label: 'Psycho', value: 1960 },
  { label: 'The Green Mile', value: 1999 },
  { label: 'The Intouchables', value: 2011 },
  { label: 'Modern Times', value: 1936 },
  { label: 'Raiders of the Lost Ark', value: 1981 },
  { label: 'Rear Window', value: 1954 },
  { label: 'The Pianist', value: 2002 },
  { label: 'The Departed', value: 2006 },
  { label: 'Terminator 2: Judgment Day', value: 1991 },
  { label: 'Back to the Future', value: 1985 },
  { label: 'Whiplash', value: 2014 },
  { label: 'Gladiator', value: 2000 },
  { label: 'Memento', value: 2000 },
  { label: 'The Prestige', value: 2006 },
  { label: 'The Lion King', value: 1994 },
  { label: 'Apocalypse Now', value: 1979 },
  { label: 'Alien', value: 1979 },
  { label: 'Sunset Boulevard', value: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    value: 1964,
  },
]

export default Form
