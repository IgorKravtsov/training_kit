import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import { useAppDispatch } from 'redux/hooks/typedHooks'
// import { logout } from 'redux/slices/userSlice'
import { useAuth } from '../../../shared-files/useAuth'

const AuthMenu: React.FC = (): React.ReactElement => {
  const { isAuth, user } = useAuth()
  const dispatch = useAppDispatch()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    // await dispatch(logout())
  }

  return (
    <>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        {user?.photoURL ? <Avatar src={user?.photoURL} alt='user photo' /> : <AccountCircle />}
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>{user?.displayName || user?.email}</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Вийти</MenuItem>
      </Menu>
    </>
  )
}

export default AuthMenu
