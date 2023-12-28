import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import zIndex from '@mui/material/styles/zIndex';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{ bgcolor:'#F1592A'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link color="white" href="/" underline="none">
                            Tunisian Food
                        </Link>
                    </Typography>
                   
                        <NavLink className={'link'} to={'register'}>Register</NavLink>
                        <NavLink className={'link'} to={'login'}>Login</NavLink>
                   
                </Toolbar>
            </AppBar>
        </Box>
    );
}