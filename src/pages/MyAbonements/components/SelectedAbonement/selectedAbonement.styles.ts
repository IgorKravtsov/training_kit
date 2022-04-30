import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  progressContainer: {
    height: '100%',
    zIndex: 1,
  },
  avatar: {
    width: 150,
    height: 150,
  },
}))
