import React from "react";
import {
    Box, Container, Typography, Card, CardContent,
    Grid, Button
} from "@mui/material";
import FlipCard from '../../components/flipCard/FlipCard.jsx';
import Symbol from "../../resources/images/symbol.png";
import meditek from "../../resources/images/meditek.png";
import persons from "../../resources/images/persons.png";
import hospitals from "../../resources/images/hospitals.png";
import pharmacy from "../../resources/images/pharmacy.png";
import admin from "../../resources/images/admin.png";
import styles from './Home.module.css';

const Home = () => {
    const features = [
        {
            title: "Para Pacientes",
            image: persons,
            content: "Acceso completo a historial médico, recetas digitales y programación de citas desde cualquier dispositivo."
        },
        {
            title: "Para Hospitales",
            image: hospitals,
            content: "Herramientas avanzadas para gestión de historiales médicos, prescripciones digitales y comunicación con farmacias."
        },
        {
            title: "Para Farmacias",
            image: pharmacy,
            content: "Verificación instantánea de recetas, gestión de inventario e integración con el sistema de salud."
        },
        {
            title: "Para Administradores",
            image: admin,
            content: "Panel de control intuitivo con análisis de datos y reportes personalizados para optimizar procesos."
        }
    ];

    const benefits = [
        "Mayor eficiencia y rapidez en la atención médica",
        "Reducción de errores en prescripciones y medicación",
        "Comunicación optimizada entre instituciones",
        "Sistema digital seguro y accesible"
    ];

    return (
        <Container maxWidth="lg" className={styles["home-container"]}>
            {/* Hero */}
            <Box className={styles["home-hero"]}>
                <Typography variant="h1" className={styles["home-title"]}>
                    Health 360
                </Typography>

                <Box className={styles["home-hero-content"]}>
                    <Typography variant="h2" className={styles["home-subtitle"]}>
                        Unificando la Salud:
                        <br />
                        Una Plataforma Integral para la Atención Médica
                    </Typography>

                    <img
                        src={Symbol}
                        className={styles["home-hero-image"]}
                        alt="Símbolo médico"
                    />
                </Box>
            </Box>

            {/* Problem */}
            <Box className={styles["home-section"]}>
                <Card className={styles["home-card"]}>
                    <CardContent>
                        <Typography className={styles["home-text"]}>
                            En la era digital, el acceso a la salud sigue siendo un desafío. La fragmentación de información entre hospitales, farmacias y pacientes genera problemas en el seguimiento de tratamientos, retrasos en la entrega de medicamentos y dificultades en la administración de datos médicos.
                        </Typography>
                    </CardContent>
                </Card>

                <Box className={styles["home-problem-content"]}>
                    <Typography className={styles["home-text"]}>
                        Nuestra plataforma nace con un propósito claro: integrar todos los actores del ecosistema de salud en un solo entorno digital, ágil y seguro. Desde pacientes y médicos hasta farmacias y administradores, todos pueden acceder a una experiencia unificada que optimiza la atención médica y mejora la calidad de vida.
                    </Typography>
                    <img
                        src={meditek}
                        className={styles["home-problem-image"]}
                        alt="MediTek"
                    />
                </Box>
            </Box>

            {/* Features */}
            <Box className={styles["home-section"]}>
                <Typography variant="h3" className={styles["home-section-title"]}>
                    ¿Qué Ofrecemos?
                </Typography>

                <Grid container spacing={3} className={styles["home-features-grid"]}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <FlipCard
                                frontContent={
                                    <Box>
                                        <Typography className={styles["home-feature-title"]}>
                                            {feature.title}
                                        </Typography>
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className={styles["home-feature-image"]}
                                        />
                                    </Box>
                                }
                                backContent={
                                    <Box>
                                        <Typography className={styles["home-text"]}>
                                            {feature.content}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Why */}
            <Box className={styles["home-why"]}>
                <Typography variant="h4" className={styles["home-section-title"]}>
                    ¿Por Qué Esta Plataforma?
                </Typography>
                <Typography className={styles["home-text"]}>
                    El acceso a la salud debería ser sencillo, seguro y eficiente. Nuestra plataforma resuelve los problemas de fragmentación conectando a todos los actores del ecosistema de salud con tecnología avanzada y un enfoque en la seguridad de datos.
                </Typography>

                <Box className={styles["home-benefits-list"]}>
                    {benefits.map((item, index) => (
                        <Box key={index} className={styles["home-benefit-item"]}>
                            <Box className={styles["home-benefit-bullet"]} />
                            <Typography className={styles["home-text"]}>
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* CTA */}
            <Box className={styles["home-cta"]}>
                <Typography variant="h3" className={styles["home-cta-title"]}>
                    Transformemos Juntos la Atención Médica
                </Typography>
                <Button variant="contained" size="large" className={styles["home-cta-button"]}>
                    Contáctanos
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
