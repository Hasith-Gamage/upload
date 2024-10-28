import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import './Navbar-com.css';
import { Box } from '@mui/material';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();  // Get the current path

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const isActive = (path) => location.pathname === path;  // Check if the button is active

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/menu">
          <ListItemText primary="Menu" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" className="navbar" sx={{
       
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Add opacity to the background
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Add shadow to the navbar
        backdropFilter: 'blur(10px)', // Optional: add a blur effect behind the navbar
        zIndex: 1300, // Make sure the navbar stays on top of content
        overflow: 'hidden', // Handle overflow if needed
        paddingBottom: '10px', // Separate the navbar from the body
        
      
      }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: 'Brush Script MT, cursive',
              fontSize: '50px',
              color: '#ffb703',
            }}
          >
            chefD
          </Typography>


          {/* Hamburger Menu for Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#FFFFFF' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Regular Buttons for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: isActive('/') ? '#ffb703' : '#FFFFFF',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#ffb703',
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/menu"
              sx={{
                color: isActive('/menu') ? '#ffb703' : '#FFFFFF',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#ffb703',
                },
              }}
            >
              Menu
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                color: isActive('/contact') ? '#ffb703' : '#FFFFFF',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#ffb703',
                },
              }}
            >
              Contact
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                color: isActive('/about') ? '#ffb703' : '#FFFFFF',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#ffb703',
                },
              }}
            >
              About Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
