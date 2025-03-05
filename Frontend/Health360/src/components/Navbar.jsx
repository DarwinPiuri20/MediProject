import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Menu,Container,Avatar,Button,Tooltip,MenuItem} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import logo from "../resources/images/logo.ico"



const pages = ['Home', 'About Us', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor:"white", color:"black", boxShadow:"0px 10px 15px rgba(0, 0, 0, 0.3) ", borderRadius:"10px", padding:"2px"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}
            component={Link}
            to="/home"
        >

            <img style={{width:"65px", }} src={logo} alt="Logo" />
        </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{ display: { xs: 'block', md: 'none', } }}
            >
              {pages.map((page) => (
                <MenuItem key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
               

                >
                    {page ==='Home' && <HomeIcon/>}
                    {page === 'About Us' && <InfoIcon/>}
                    {page === 'Contact' && <ContactMailIcon/>}
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
          to="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
            
            {pages.map((page) => (
                
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'black', display: 'flex', alignContent: 'space-between',
                    "&:hover": {
                        backgroundColor: "rgb(58, 214, 84)",
                        color: "white",
                        boxShadow:"inset 0px 0px 10px rgba(0, 0, 0, 0.83)"
                    },
                 }}
              >
                {page ==='Home' && <HomeIcon/>}
                    {page === 'About Us' && <InfoIcon/>}
                    {page === 'Contact' && <ContactMailIcon/>}
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button
              
                component={Link}
                to="/login"
                sx={{ my: 1, color: 'black', display: 'flex',
                    "&:hover": {
                        backgroundColor: "rgb(58, 214, 84)",
                        color: "white",
                        boxShadow:"inset 0px 0px 10px rgba(0, 0, 0, 0.83)"
                    },
                }}
              >
                <LoginIcon/>
                Login
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
