import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    paddingBottom: '70px',
    textAlign: 'center',
  },
  listWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
}))
