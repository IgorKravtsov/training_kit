import React from 'react'
import { useStyles } from './error.styles'

const Error: React.FC = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <p className={classes.imgContainer}>
        <img className={classes.img} src={process.env.PUBLIC_URL + '/error.gif'} alt='error' />
      </p>
    </div>
  )
}

export default Error
