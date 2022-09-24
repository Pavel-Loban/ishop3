import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar,Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
     <AppBar position='static' >
        <Toolbar>
            <Typography
            variant='h6'
            component='span'
            sx={{flexGrow: 1}}
            >
                My Shop
            </Typography>
            <IconButton
            color='inherit'
            >
                <ShoppingBasket/>
            </IconButton>
        </Toolbar>
     </AppBar>
    );
};

export default Header;