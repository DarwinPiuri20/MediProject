import React from 'react';
import {Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';
import styles from './PatientNavBar.module.css';

const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/paciente/home' },
    { text: 'Citas médicas', icon: <EventNoteIcon />, path: '/paciente/citas' },
    { text: 'Recetas', icon: <ReceiptIcon />, path: '/paciente/recetas' },
    { text: 'Historial médico', icon: <HistoryIcon />, path: '/paciente/historial' },
    { text: 'Perfil', icon: <PersonIcon />, path: '/paciente/perfil' },
    { text: 'Logout', icon: <LogoutIcon />, path: '/logout' }
];

const PatientNavBar = () => {
    return (
        <Drawer
            variant="permanent"
            className={styles.drawer}
            classes={{
                paper: styles.drawerPaper
            }}
        >
            <Toolbar />
            <div className={styles.brand}>
                <Typography variant="h6" className={styles.brandText}>
                    Health 360
                </Typography>
            </div>
            <List className={styles.navList}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            className={styles.navLink}
                            activeClassName={styles.active}
                            sx={{
                                '&.active': {
                                    backgroundColor: '#00A4FF',
                                    fontWeight: 'bold',
                                    boxShadow: '0 0 10px rgba(0, 164, 255, 0.4)'
                                },
                                '&:hover': {
                                    backgroundColor: '#007acc',
                                    transform: 'translateX(4px)'
                                }
                            }}
                        >
                            <ListItemIcon className={styles.icon}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default PatientNavBar;