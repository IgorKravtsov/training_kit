import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import ImageWrapper from 'components/ImageWrapper/ImageWrapper'
import kyokushinImage from 'assets/images/kyokushin.png'

const useStyles = makeStyles((theme: Theme) => ({
  img: { width: '300px', height: '650px' },
}))

interface MainImageProps {
  className?: string
}

const MainImage: React.FC<MainImageProps> = ({ className }): React.ReactElement => {
  const classes = useStyles()

  return <ImageWrapper src={kyokushinImage} alt='sport image' className={classes.img} />
}

export default MainImage
