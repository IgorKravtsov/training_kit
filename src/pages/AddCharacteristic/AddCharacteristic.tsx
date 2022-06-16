import React, { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
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

import { GetAllCharacteristics } from 'api/characteristic/characteristic'
import { Characteristic } from 'api/characteristic/types'
import { AppUser } from 'api/user/types'
import { useHttpRequest, useThemeColor } from 'shared-files/hooks'

const AddCharacteristic: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const { t } = useTranslation(['addCharacteristic'])

  const [getAllCharacteristics] = useHttpRequest(GetAllCharacteristics)

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

  const getCharacteristicList = async (user: Partial<AppUser>) => {
    if (!user) return

    const response = await getAllCharacteristics({ userId: user.id || 0 })
    if (response) {
      const result = user.characteristics
        ? arrDiff(response.characteristics, user.characteristics)
        : response.characteristics
      setCharacteristicList(
        result.map((item) => ({ label: item.title, ...item })),
      )
    }
  }

  useEffect(() => {
    user && getCharacteristicList(user)
  }, [])

  return (
    <>
      <Typography variant="h1">{t('addCharacteristic:title')}</Typography>
      <FormWrapper formFeatures={formFeatures} onSubmit={onSubmit}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={4} sx={{ mt: 2 }}>
            <FormAutocomplete
              name="characteristicName"
              control={control}
              errors={errors}
              options={characteristicList}
              label={t('addCharacteristic:characteristicNameField.label')}
              placeholder={t(
                'addCharacteristic:characteristicNameField.placeholder',
              )}
            />
          </Grid>
          <Grid item xs={4} sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" color={useThemeColor()}>
              {t('addCharacteristic:btnLabel')}
            </Button>
          </Grid>
        </Grid>
      </FormWrapper>
      {isSearching && (
        <Typography variant="h2">
          {t('addCharacteristic:searchingText')}
        </Typography>
      )}
    </>
  )
}

export default AddCharacteristic
