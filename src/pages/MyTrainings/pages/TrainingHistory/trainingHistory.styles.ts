import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  // toolbar: {
  //   color: theme.palette.secondary.main,
  //   '& .MuiDataGrid-toolbarContainer': {
  //     color: theme.palette.secondary.main,
  //     // fontSize: 20,
  //   },
  // },
  panel: {
    '& .MuiTypography-root': {
      // fontSize: 20,
    },
    '& .MuiSwitch-track': {
      backgroundColor: `${theme.palette.secondary.main} !important`,
    },
    '& .MuiSwitch-thumb': {
      color: `${theme.palette.secondary.main} `,
    },
  },
}))
