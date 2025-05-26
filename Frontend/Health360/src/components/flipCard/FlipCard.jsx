import React, { useState } from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import styles from "./FlipCard.module.css";

const FlipCard = ({ frontContent, backContent, frontColor = "white", backColor = "#0C0354" }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const theme = useTheme();

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={styles["flip-container"]} onClick={handleFlip}>
            <div
                className={`${styles["flip-inner"]} ${isFlipped ? styles.flipped : ""}`}
            >
                {/* Cara frontal */}
                <Card
                    className={styles["flip-card-front"]}
                    sx={{
                        background: `linear-gradient(135deg, ${frontColor} 0%, ${theme.palette.grey[100]} 100%)`,
                        color: theme.palette.text.primary
                    }}
                >
                    <CardContent className={styles["flip-content"]}>
                        <Typography variant="h5" component="div" fontWeight="bold">
                            {frontContent}
                        </Typography>
                    </CardContent>
                </Card>

                {/* Cara trasera */}
                <Card
                    className={styles["flip-card-back"]}
                    sx={{
                        background: `linear-gradient(135deg, ${backColor} 0%, ${theme.palette.primary} 100%)`,
                        color: "white"
                    }}
                >
                    <CardContent className={styles["flip-content"]}>
                        <Typography variant="h5" component="div" fontWeight="bold">
                            {backContent}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default FlipCard;