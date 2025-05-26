import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, TextField, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import styles from './ChatBot.module.css';

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (message.trim() === '') return;

        // Mensaje del usuario
        setMessages(prev => [...prev, { from: 'user', text: message }]);
        setMessage('');

        // Simular respuesta del bot
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                from: 'bot',
                text: 'Gracias por tu mensaje. ¿En qué más puedo ayudarte?'
            }]);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className={styles.chatWrapper}>
            {open && (
                <Paper elevation={4} className={`${styles.chatWindow} ${open ? styles.open : ''}`}>
                    <Box className={styles.chatHeader}>
                        <Typography variant="subtitle1">Asistente Virtual</Typography>
                        <IconButton
                            size="small"
                            onClick={() => setOpen(false)}
                            className={styles.closeButton}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box className={styles.chatBody}>
                        {messages.map((msg, index) => (
                            <Typography
                                key={index}
                                className={msg.from === 'user' ? styles.userMessage : styles.botMessage}
                            >
                                {msg.text}
                            </Typography>
                        ))}
                        {isTyping && (
                            <Box className={styles.typingIndicator}>
                                <Box className={styles.typingDot} />
                                <Box className={styles.typingDot} />
                                <Box className={styles.typingDot} />
                            </Box>
                        )}
                    </Box>

                    <Box className={styles.chatInput}>
                        <TextField
                            fullWidth
                            size="small"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Escribe un mensaje..."
                            variant="outlined"
                        />
                        <Button
                            onClick={handleSend}
                            variant="contained"
                            className={styles.sendButton}
                        >
                            <SendIcon />
                        </Button>
                    </Box>
                </Paper>
            )}

            <IconButton
                className={styles.chatButton}
                onClick={() => setOpen(!open)}
            >
                <ChatIcon />
            </IconButton>
        </div>
    );
};

export default ChatBot;