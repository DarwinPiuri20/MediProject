import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import PatientNavBar from '../../components/patients/navBar/PatientNavBar';
import Greeting from '../../components/greeting/Greeting';
import styles from './PatientLayout.module.css';
import Chatbot from "../../components/patients/chatbot/chatbot.jsx";


const PatientLayout = () => {
    return (
        <Box className={styles.layoutContainer}>
            <PatientNavBar />
            <Box component="main" className={styles.mainContent}>
                <Greeting />
                <Chatbot/>
                <Outlet />
            </Box>
        </Box>
    );
};

export default PatientLayout;
