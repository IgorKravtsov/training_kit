import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const useStyles = makeStyles((theme: Theme) => ({
  img: { width: '100%', height: '100%' },
}))

interface MainImageProps {
  src: string
  alt?: string
  className?: string
}

const ImageWrapper: React.FC<MainImageProps> = ({ src, alt, className }): React.ReactElement => {
  const classes = useStyles()

  return (
    <p className={className}>
      <img src={src} alt={alt} className={classes.img} />
    </p>
  )
}

export default ImageWrapper
