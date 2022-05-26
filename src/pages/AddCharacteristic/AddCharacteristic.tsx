import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import FormAutocomplete from 'components/FormAutocomplete/FormAutocomplete'
import FormWrapper from 'components/FormWrapper/FormWrapper'

import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'
import { AutocompleteOption } from 'shared-files/interfaces'

import { useAppDispatch } from 'redux/hooks/typedHooks'
import { hideLoading, showLoading } from 'redux/slices/loadingIndicatorSlice'

import { GetAllCharacteristics } from 'api/characteristic/characteristic'
import { Characteristic } from 'api/characteristic/types'
import { AppUser } from 'api/user/types'
import { useThemeColor } from 'shared-files/hooks'
import { SERVER_DELAY_TIME } from 'shared-files/constants'

const AddCharacteristic: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const dispatch = useAppDispatch()

  const [isSearching, setIsSearching] = useState(false)
  const [characteristicList, setCharacteristicList] = useState<
    AutocompleteOption[]
  >([])

  const validationSchema = yup.object({
    characteristicName: yup.mixed().required('Це необхідно вибрати'),
  })
  type SubmitData = yup.InferType<typeof validationSchema>

  const formFeatures = useForm({
    resolver: yupResolver(validationSchema),
  })

  const {
    control,
    formState: { errors },
  } = formFeatures

  const arrDiff = (
    arr1: Characteristic[],
    arr2: Characteristic[],
  ): Characteristic[] => {
    return arr1.filter(
      ({ id: id1 }) => !arr2.some(({ id: id2 }) => id2 === id1),
    )
  }

  const onSubmit = (data: SubmitData) => {
    setIsSearching(true)
    console.log(data)
  }

  const getCharacteristicList = async (user: Partial<AppUser> | null) => {
    if (!user) return

    dispatch(showLoading())
    setTimeout(async () => {
      const response = await GetAllCharacteristics({ userId: user.id || 0 })
      dispatch(hideLoading())
      const result = user.characteristics
        ? arrDiff(response.characteristics, user.characteristics)
        : response.characteristics
      setCharacteristicList(
        result.map((item) => ({ label: item.title, ...item })),
      )
    }, SERVER_DELAY_TIME)
  }

  useEffect(() => {
    getCharacteristicList(user)
  }, [])

  useEffect(() => {
    console.log('===characteristics===', characteristicList)
  }, [characteristicList])

  return (
    <>
      <Typography variant="h1">Додати характеристику</Typography>
      <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={4} sx={{ mt: 2 }}>
            <FormAutocomplete
              name="characteristicName"
              control={control}
              errors={errors}
              options={characteristicList}
              label="Оберіть характеристику"
              placeholder="Оберіть характеристику..."
            />
          </Grid>
          <Grid item xs={4} sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" color={useThemeColor()}>
              Знайти пристрій
            </Button>
          </Grid>
        </Grid>
      </FormWrapper>
      {isSearching && <Typography variant="h2">Пошук пристрою...</Typography>}
    </>
  )
}

export default AddCharacteristic
