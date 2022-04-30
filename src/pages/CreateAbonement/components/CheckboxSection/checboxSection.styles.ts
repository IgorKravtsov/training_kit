import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '10px',
  },
}))
