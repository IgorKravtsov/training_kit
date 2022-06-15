import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { MenuItem } from 'shared-files/interfaces'
import { DrawerContext } from 'components/Header/components/drawerContext'

export interface CollapsableListItemProps {
  item: MenuItem
}

const CollapsableListItem: React.FC<CollapsableListItemProps> = ({
  item,
}): React.ReactElement => {
  const { icon, items, name } = item
  const navigate = useNavigate()
  const { toggleFunc } = useContext(DrawerContext)

  const [open, setOpen] = useState(false)

  const handleClick = (item: MenuItem) => {
    item.onClick && item.onClick()
    item.link && navigate(item.link)
    setOpen(!open)
  }

  const handleInnerClick = (item: MenuItem) => {
    item.onClick && item.onClick()
    item.link && navigate(item.link)
    toggleFunc(false)
  }

  return (
    <>
      <ListItemButton onClick={() => handleClick(item)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items &&
            items.map((innerItem) => (
              <>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => handleInnerClick(innerItem)}
                >
                  <ListItemIcon>{innerItem.icon}</ListItemIcon>
                  <ListItemText primary={innerItem.name} />
                </ListItemButton>
              </>
            ))}
        </List>
      </Collapse>
    </>
  )
}

export default CollapsableListItem
