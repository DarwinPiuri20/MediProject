import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './Greeting.module.css';

const Greeting = () => {
    const userName = localStorage.getItem('nombre') || 'Juan Perez';

    return (
        <Box>
            <p className={styles.greeting}>
                Bienvenido, {userName}
            </p>
        </Box>
    );
};

export default Greeting;
