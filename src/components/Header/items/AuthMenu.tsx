import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'
import { useAuth } from 'shared-files/old_useAuth'

import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'

import { useAppDispatch } from 'redux/hooks/typedHooks'
import { logout } from 'redux/slices/userSlice'
import { useAuthContext } from 'shared-files/AuthProvider/AuthProvider'

const AuthMenu: React.FC = (): React.ReactElement => {
  const { user } = useAuthContext()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    await dispatch(logout())
    navigate(RouteNames.WELCOME)
  }

  const goToPage = (path: string) => {
    navigate(path)
    handleClose()
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
        sx={{ ml: 'auto' }}
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
        <MenuItem onClick={() => goToPage(`${RouteNames.CABINET}/${user?.uid}`)}>{user?.displayName || user?.email}</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Вийти</MenuItem>
      </Menu>
    </>
  )
}

export default AuthMenu
