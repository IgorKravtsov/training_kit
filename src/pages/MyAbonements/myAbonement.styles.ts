import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: 'center',
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '52px',
    width: '40vw',
    height: '90vh',
    overflowY: 'auto',
    // boxShadow: 24,
  },
}))
