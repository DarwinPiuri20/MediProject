import * as React from 'react';
import {
    AppBar, Box, Toolbar, Typography, Menu,
    Container, Button, MenuItem, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import logo from "../../resources/images/logo.ico";
import styles from './NavBar.module.css';

const pages = ['Home', 'About-Us', 'Contact'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <AppBar position="static" className={styles["med-appbar"]}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>

                    {/* Logo y nombre desktop */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            alignItems: "center",
                            gap: "10px",
                            textDecoration: "none"
                        }}
                        component={Link}
                        to="/home"
                    >
                        <img className={styles["med-logo"]} src={logo} alt="Logo" />
                        <Typography variant="h6" noWrap className={styles["med-appbar-title"]}>
                            Health 360
                        </Typography>
                    </Box>

                    {/* Menú móvil */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            className={styles["med-menu-button"]}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                            className={styles["med-mobile-menu"]}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    component={Link}
                                    to={page === 'home' ? '/' : `/${page.toLowerCase()}`}
                                    onClick={handleCloseNavMenu}
                                    className={styles["med-mobile-menu-item"]}
                                >
                                    {page === 'Home' && <HomeIcon className={styles["med-menu-icon"]} />}
                                    {page === 'About-Us' && <InfoIcon className={styles["med-menu-icon"]} />}
                                    {page === 'Contact' && <ContactMailIcon className={styles["med-menu-icon"]} />}
                                    <Typography className={styles["med-mobile-menu-text"]}>
                                        {page.replace('-', ' ')}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        {/* Logo móvil */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                textDecoration: "none",
                                alignItems: "center",
                                gap: "10px",
                                ml: 2
                            }}
                            component={Link}
                            to="/"
                        >
                            <img className={styles["med-logo"]} src={logo} alt="Logo" />
                            <Typography variant="h6" noWrap className={styles["med-appbar-title"]}>
                                Health 360
                            </Typography>
                        </Box>
                    </Box>

                    {/* Menú desktop */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={Link}
                                to={page === '/home' ? '/' : `/${page.toLowerCase()}`}
                                onClick={handleCloseNavMenu}
                                className={styles["med-nav-button"]}
                                startIcon={
                                    page === 'Home' ? <HomeIcon /> :
                                        page === 'About-Us' ? <InfoIcon /> :
                                            <ContactMailIcon />
                                }
                            >
                                {page.replace('-', ' ')}
                            </Button>
                        ))}
                    </Box>

                    {/* Botón login */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            component={Link}
                            to="/login"
                            className={styles["med-login-button"]}
                            startIcon={<LoginIcon />}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
