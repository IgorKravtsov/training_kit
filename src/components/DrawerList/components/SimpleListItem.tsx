import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { MenuItem } from 'shared-files/interfaces'
import { DrawerContext } from 'components/Header/items/drawerContext'

export interface SimpleListItemProps {
  item: MenuItem
}

const SimpleListItem: React.FC<SimpleListItemProps> = ({ item }): React.ReactElement => {
  const { icon, link, name } = item
  const { toggleFunc } = useContext(DrawerContext)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
    toggleFunc(false)
  }

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  )
}

export default SimpleListItem
