import React from 'react';
import { Card, AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { AccountCircle, ExitToApp } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleProfile }) => {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography className="toggle" variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            Nika E-Commerce
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleProfile}>
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit">
              <ExitToApp />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
