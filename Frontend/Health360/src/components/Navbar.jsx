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
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems:"center", gap:"10px", textDecoration:"none" }}
            component={Link}
            to="/home"
           
        >
          <img style={{width:"65px", }} src={logo} alt="Logo" />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'ui-monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color:'#1aaf5f'

            
            }}
          >
            Health 360
          </Typography>
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
                  <Typography  sx={{ my: 1, color: 'black', display: 'flex', alignContent: 'space-between',
                  alignItems:'unset',
                    "&:hover": {
                        backgroundColor: "#1aaf5f",
                        color: "white",
                        boxShadow:"inset 0px 0px 5px rgb(0, 0, 0)"
                    },
                    fontFamily:"ui-monospace"
                 }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ display: { xs: 'flex', md: 'none' },textDecoration:"none", alignItems:"center", gap:"10px", color:"black"}}
            component={Link} to="/home" >
            <img style={{width:"65px", }} src={logo} alt="Logo" />
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: {md: 'flex' },
              fontFamily: 'ui-monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'#1aaf5f'
            
            }}
          >
            Health 360
          </Typography>
            </Box>
           
          </Box>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-evenly' }}>
            
            {pages.map((page) => (
                
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'black', display: 'flex', alignContent: 'space-between',
                  alignItems:'unset',
                    "&:hover": {
                        backgroundColor: "#1aaf5f",
                        color: "white",
                        boxShadow:"inset 0px 0px 5px rgb(0, 0, 0)"
                    },
                    fontFamily:"ui-monospace"
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
                        backgroundColor: "#1aaf5f",
                        color: "white",
                        boxShadow:"inset 0px 0px 5px rgb(0, 0, 0)"
                    },
                    fontFamily:"ui-monospace"
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
