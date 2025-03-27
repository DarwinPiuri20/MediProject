import React from "react";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import FlipCard from "../components/FlipCard";
import Symbol from "../resources/images/Symbol.png";
import meditek from "../resources/images/meditek.png";
import persons from "../resources/images/persons.png";
import hospitals from "../resources/images/hospitals.png";
import pharmacy from "../resources/images/pharmacy.png";
import admin from "../resources/images/admin.png";


const Home = () => {
    

    return (
        <Container>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",  }}>
                <Typography variant="h1" align="center" sx={{color:"#1aaf5f",fontFamily:"ui-monospace",padding:"20px",fontSize:{
                    xs:"3rem",
                    sm:"4rem",
                    md:"5rem"
                }  }}>Health 360</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding:"20px", flexDirection:{
                xs:"column",
                sm:"column",
                md:"row"
            }}}>
                <Typography variant="h4" align="" sx={{color:"#83c55c",fontFamily:"ui-monospace", fontSize:{
                    xs:"1.5rem",
                    sm:"2rem",
                    md:"2.5rem"
                }}}>
                Unificando la Salud:
                <br />
                Una Plataforma Integral para la Atención Médica
                </Typography>
               
                    <img src={Symbol} style={{ width:"25%",filter: "drop-shadow(5px 5px 10px rgba(51, 112, 36, 0.8))" }} className="medicSymbol" alt="medicSymbol" />
                  
            </Box>
            <Box>
                <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"20px", fontSize:"1.2rem"}}>
                En la era digital, el acceso a la salud sigue siendo un desafío. La fragmentación de información entre hospitales, farmacias y pacientes genera problemas en el seguimiento de tratamientos, retrasos en la entrega de medicamentos y dificultades en la administración de datos médicos.
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding:"20px", flexDirection:{
                    xs:"column",
                    sm:"column",
                    md:"row"
                } }}>
                    <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"20px", fontSize:"1.2rem"}}>
                    Nuestra plataforma nace con un propósito claro: integrar todos los actores del ecosistema de salud en un solo entorno digital, ágil y seguro. Desde pacientes y médicos hasta farmacias y administradores, todos pueden acceder a una experiencia unificada que optimiza la atención médica y mejora la calidad de vida.
                    </Typography>
                    <img src={meditek} style={{ width:"20%",filter: "drop-shadow(5px 5px 10px #dfda82)"  }} className="medicSymbol" alt="MediTek" />
                </Box>
            </Box>

            <Box>
                <Typography variant="h4" align="" sx={{color:"#83c55c",fontFamily:"ui-monospace",padding:"20px"}}>
                ¿Qué Ofrecemos?
                </Typography>
                
                <Box >
                    <Box sx={{ display: "flex", alignItems: "center", padding:"20px", flexDirection:{
                        xs:"column",
                        sm:"column",
                        md:"row"
                    } }}>
                   <FlipCard
                    frontContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="h4" a sx={{fontFamily:"ui-monospace",padding:"10px", color:"#1aaf5f", fontSize:"1.5rem"}}>
                            Para Pacientes
                        </Typography>
                        <img src={persons} alt="person" style={{ width:"45%",filter: "drop-shadow(5px 5px 10px rgba(51, 112, 36, 0.8))" }} />
                        </Box>
                    }
                    backContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"10px"}}>
                        Como usuario-paciente, tendrás acceso a <b style={{color:"#1aaf5f"}}>tu historial médico completo, recetas digitales, programación de citas y recordatorios de medicación.</b> Olvídate de los papeles y del riesgo de perder información valiosa: todo estará disponible en una plataforma accesible desde cualquier dispositivo.
                        <br />
                        Además, con nuestro sistema de alertas, recibirás notificaciones cuando sea hora de tomar tus medicamentos o cuando necesites renovar una receta, asegurando un seguimiento adecuado de tu tratamiento.
                        </Typography>
                      
                        </Box>
                    }
                   />
                    <FlipCard
                    frontContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="h4" a sx={{fontFamily:"ui-monospace",padding:"10px", color:"#1aaf5f", fontSize:"1.5rem"}}>
                            Para Hospitales Y Clinicas
                        </Typography>
                        <img src={hospitals} alt="hospital" style={{ width:"45%",filter: "drop-shadow(5px 5px 10px rgba(51, 112, 36, 0.8))" }} />
                        </Box>
                    }
                    backContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"10px"}}>
                        Facilitamos la gestión de la atención médica con herramientas avanzadas que permiten:
                        <br />
                        <b style={{color:"#1aaf5f"}}>✔</b> Acceder al historial médico de los pacientes en tiempo real, reduciendo errores en diagnósticos y prescripciones.
                        <br />
                        <b style={{color:"#1aaf5f"}}>✔</b> Generar y gestionar recetas digitales, eliminando procesos manuales y minimizando el riesgo de errores en la medicación.
                        <br />
                        <b style={{color:"#1aaf5f"}}>✔</b> Optimizar la comunicación con farmacias, asegurando que los pacientes reciban sus medicamentos sin contratiempos.
                        <br />
                        Con nuestra plataforma, los médicos y profesionales de la salud podrán enfocarse en lo más importante: brindar atención de calidad.
                        </Typography>
                      
                        </Box>
                    }
                   />
                    </Box>
                   
                </Box>
                <Box>
                <Box sx={{ display: "flex", alignItems: "center", padding:"20px", flexDirection:{
                        xs:"column",
                        sm:"column",
                        md:"row"
                    } }}>
                   <FlipCard
                    frontContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="h4" a sx={{fontFamily:"ui-monospace",padding:"10px", color:"#1aaf5f", fontSize:"1.5rem"}}>
                        Para Farmacias
                        </Typography>
                        <img src={pharmacy} alt="pharmacy" style={{ width:"45%",filter: "drop-shadow(5px 5px 10px rgba(51, 112, 36, 0.8))" }} />
                        </Box>
                    }
                    backContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"10px"}}>
                        Nuestra solución digital permite a las farmacias conectarse directamente con hospitales y pacientes, simplificando el proceso de adquisición y entrega de medicamentos.
                        <br />
                        📌 <b style={{color:"#1aaf5f"}}>Verificación de recetas en tiempo real:</b> Reduce el riesgo de fraudes y errores.
                        <br />
                        📌 <b style={{color:"#1aaf5f"}}>Gestión automatizada de stock:</b> Recibe alertas cuando sea necesario reabastecer ciertos medicamentos.
                        <br />
                        📌 <b style={{color:"#1aaf5f"}}>Facilidad de entrega y logística:</b> Agiliza el proceso de compra y recogida de medicamentos para los pacientes.
                        <br />
                        Al integrar la cadena de suministro farmacéutica con hospitales y pacientes, <b style={{color:"#1aaf5f"}}>logramos un sistema más eficiente, accesible y seguro.</b>
                        </Typography>
                      
                        </Box>
                    }
                   />
                    <FlipCard
                    frontContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="h4" a sx={{fontFamily:"ui-monospace",padding:"10px", color:"#1aaf5f", fontSize:"1.5rem"}}>
                            Para Administradores
                        </Typography>
                        <img src={admin} alt="admin" style={{ width:"45%",filter: "drop-shadow(5px 5px 10px rgba(51, 112, 36, 0.8))" }} />
                        </Box>
                    }
                    backContent={
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection:"column" }}>
                        <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"10px"}}>
                        Los administradores de hospitales, farmacias y otras instituciones de salud podrán acceder a un panel de control intuitivo y poderoso que les permitirá:
                        <br />
                        <b style={{color:"#1aaf5f"}}>✔</b> Supervisar y gestionar la plataforma con herramientas avanzadas.
                        <br />
                        <b style={{color:"#1aaf5f"}}>✔</b> Analizar datos de pacientes, recetas y transacciones para optimizar procesos.
                        <br />
                        <b style={{color:"#1aaf5f"}}>✔</b> Mejorar la toma de decisiones con reportes personalizados.
                        <br />
La digitalización de la gestión médica no solo mejora la experiencia de pacientes y profesionales de la salud, sino que también reduce costos, minimiza errores y optimiza los recursos de todo el sistema de salud.
                        </Typography>
                      
                        </Box>
                    }
                   />
                    </Box>
                   <Box>

                   <Typography variant="h4" a sx={{fontFamily:"ui-monospace",padding:"10px", color:"#1aaf5f", fontSize:"1.5rem"}}>
                   ¿Por Qué Esta Plataforma?
                    </Typography>
                    <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"10px"}}>
                    El acceso a la salud debería ser sencillo, seguro y eficiente. Sin embargo, en muchos casos, los pacientes enfrentan dificultades para acceder a sus medicamentos, los médicos carecen de información integrada para un diagnóstico preciso y las farmacias luchan con procesos administrativos poco optimizados.
                    <br />
                    Nuestra plataforma resuelve estos problemas al conectar a todos los actores del ecosistema de salud en un solo lugar. Con tecnología avanzada, inteligencia artificial y un enfoque en la seguridad de los datos, ofrecemos una solución completa para transformar la forma en que se accede y gestiona la atención médica.
                    <br />
                    
                    </Typography>
                    <Typography variant="body1" a sx={{fontFamily:"ui-monospace",padding:"10px"}}>
                    🔹 Mayor eficiencia y rapidez en la atención.
                    <br />
                    🔹 Menos errores en la prescripción y administración de medicamentos.
                    <br />
                    🔹 Mejor comunicación entre hospitales, farmacias y pacientes.
                    <br />
                    🔹 Un ecosistema de salud digital, accesible y seguro.
                    </Typography>
                   </Box>
                    
                    <Box>
                        <Typography>
                        Transformemos Juntos la Atención Médica
                        </Typography>
                    </Box>


                </Box>

            </Box>
        </Container>
    );
};

export default Home;