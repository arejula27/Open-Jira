import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export const NavBar = () => {
  return (
    <AppBar position='sticky' >
        <Toolbar>
            <IconButton size='large'  edge="start"  aria-label="menu" >
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' >OpenJira</Typography>
        </Toolbar>

    </AppBar>
  )
}
