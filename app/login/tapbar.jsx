import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Menu ,MenuItem} from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Menu icon button */}
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
             size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
             
              <MenuItem onClick={handleClose}>Admin</MenuItem>
              <MenuItem onClick={handleClose}>Accountanter</MenuItem>
              <MenuItem onClick={handleClose}>Add User</MenuItem>
            </Menu>
            <MenuIcon />
          </IconButton>

          {/* Title or branding */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          {/* Search icon button */}
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
