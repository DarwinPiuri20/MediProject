import React from 'react';
import styles from './Login.module.css';
import LoginForm from '../../components/loginForm/LoginForm.jsx'

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
