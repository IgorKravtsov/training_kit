import { makeStyles } from '@mui/styles'
import { AppCardProps } from './AppCard'

export const useStyles = makeStyles({
  root: {
    minWidth: ({ minWidth }: AppCardProps) => minWidth || 500,
    maxWidth: ({ maxWidth }: AppCardProps) => maxWidth || 750,
    padding: '16px',
    ['@media (max-width: 600px)']: {
      minWidth: '350px !important',
      maxWidth: '350px !important',
    },
  },
})
