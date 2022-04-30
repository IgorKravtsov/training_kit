import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '90vh',
  },
  card: {
    padding: '40px',
    height: '80vh',
    width: '40vw',
    marginTop: '30px',
    scrollY: 'auto',
  },
}))
