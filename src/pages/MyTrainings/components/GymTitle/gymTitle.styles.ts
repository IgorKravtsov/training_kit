import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    ...theme.typography.h2,
    textDecoration: 'underline',
    margin: '0 auto',
    fontSize: '42px',
    lineHeight: '2',
  },
}))
