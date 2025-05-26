import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import styles from './LoginForm.module.css';

const LoginForm = () => {
    return (
        <>
            <div className={styles.avatar}>
                <AccountCircleIcon fontSize="large" />
            </div>
            <TextField
                variant="outlined"
                type="email"
                fullWidth
                required={true}
                placeholder="Email"
                className={styles.input}
                InputProps={{
                    startAdornment: <AccountCircleIcon className={styles.icon} />
                }}
            />
            <TextField
                variant="outlined"
                fullWidth
                type="password"
                placeholder="Password"
                className={styles.input}
                InputProps={{
                    startAdornment: <LockIcon className={styles.icon} />
                }}
            />
            <div className={styles.options}>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Typography variant="body2" className={styles.forgot}>
                    Forgot Password?
                </Typography>
            </div>
            <Button variant="contained" fullWidth className={styles.loginButton}>
                LOGIN
            </Button>
        </>
    );
};

export default LoginForm;
