import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const pages = ["pets", "store", "analysis"];

function Header() {

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("login");
  }

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">

        <Toolbar disableGutters >
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '28px', mb: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'poppins',
              fontWeight: 900,
              fontSize: "25px",
              letterSpacing: '.19rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CUTE PETS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, ml: -2 }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"

            >
              <MenuIcon sx={{ fontSize: "26px" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <NavLink to={`/${page}`} style={{textDecoration:"none" }} >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: .2, color: '#4c0f78', display: 'block',textAlign:"center" }}
                >

                  {page}
                </Button>
                 
              </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CUTE PETS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (

              <NavLink to={`/${page}`} style={{textDecoration:"none"}} >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >

                  {page}
                </Button>
              </NavLink>

            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: -1 }}>


            <Stack spacing={1} direction="row" >

              <Button variant="contained" className='btn' type='submit' onClick={handleLogout}>Logout</Button>
            </Stack>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;