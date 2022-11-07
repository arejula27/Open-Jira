import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';
import NextLink from 'next/link';

export const NavBar = () => {
    const { openSideMenu } = useContext(UIContext);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    onClick={openSideMenu}
                >
                    <MenuIcon />
                </IconButton>
                <NextLink
                    href={'/'}
                    passHref
                    style={{ color: 'white', 'text-decoration': 'none' }}
                >
                    <Typography variant="h6">OpenJira</Typography>
                </NextLink>
            </Toolbar>
        </AppBar>
    );
};
