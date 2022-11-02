import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react'
import { UIContext } from '../../context/ui/UIContext';

export const NavBar = () => {

  const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position='sticky' >
        <Toolbar>
            <IconButton size='large'  edge="start"  aria-label="menu"  onClick={openSideMenu} >
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' >OpenJira</Typography>
        </Toolbar>

    </AppBar>
  )
}
