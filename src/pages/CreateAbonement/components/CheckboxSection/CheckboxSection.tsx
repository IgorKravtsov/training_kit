import React from 'react'
import { useStyles } from './checboxSection.styles'

import { useTranslation } from 'react-i18next'

import { Grid, Typography } from '@mui/material'
import Checkbox from 'components/Checkbox/Checkbox'

import { Options } from 'pages/CreateAbonement/interfaces'

interface CheckboxSectionProps {
  options: Options
  changeOption: (value: boolean, option: keyof Options) => void
}

const CheckboxSection: React.FC<CheckboxSectionProps> = ({
  options,
  changeOption,
}): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation(['createAbonement'])

  return (
    <Grid
      container
      justifyContent="flex-end"
      alignItems="center"
      component="section"
      className={classes.wrapper}
    >
      <Grid item xs={4}>
        <Typography>{t('createAbonement:checkboxesLabel')}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Checkbox
          onChange={(_, checked) => changeOption(checked, 'byDays')}
          value={options.byDays}
          label={t('createAbonement:daysCheckboxLabel')}
        />
      </Grid>
      <Grid item xs={4}>
        <Checkbox
          onChange={(_, checked) => changeOption(checked, 'byTrainings')}
          value={options.byTrainings}
          label={t('createAbonement:trainingsCheckboxLabel')}
        />
      </Grid>
    </Grid>
  )
}

export default CheckboxSection
