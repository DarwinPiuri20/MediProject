import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Api } from "../services/api";

const Form = ({ type }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: type === "createUser" ? "" : undefined,
    });

    const api = new Api();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let url = "";
            let payload = { ...formData };

            // Eliminar el campo role si no es createUser
            if (type !== "createUser") {
                delete payload.role;
            }

            // Configurar la URL según el tipo de formulario
            switch(type) {
                case "login":
                    url = "auth/login";
                    // Para login solo necesitamos username y password
                    payload = {
                        username: formData.username,
                        password: formData.password
                    };
                    break;
                case "register":
                    url = "auth/register";
                    break;
                case "createUser":
                    url = "users";
                    break;
                default:
                    throw new Error("Tipo de formulario no válido");
            }

            const response = await api.post(url, payload);

            if (response) {
                alert(`${type === "login" ? "Inicio de sesión exitoso" :
                    type === "register" ? "Registro completado" :
                        "Usuario creado"} correctamente!`);

                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    role: type === "createUser" ? "" : undefined,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            alert(error.response?.data?.message || "Ocurrió un error. Por favor intente nuevamente.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            className="med-form-container"
        >
            <Typography variant="h5" className="med-form-title">
                {type === "login" ? "Iniciar Sesión" :
                    type === "register" ? "Registrarse" :
                        "Crear Usuario"}
            </Typography>

            <TextField
                className="med-form-input"
                label="Nombre de Usuario"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />

            {type !== "login" && (
                <TextField
                    className="med-form-input"
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
            )}

            <TextField
                className="med-form-input"
                label="Contraseña"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
            />

            {type === "createUser" && (
                <TextField
                    className="med-form-input"
                    label="Rol"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
            )}

            <Button
                type="submit"
                variant="contained"
                className="med-form-button"
                fullWidth
                sx={{ mt: 3 }}
            >
                {type === "login" ? "Ingresar" :
                    type === "register" ? "Registrarse" :
                        "Crear Usuario"}
            </Button>
        </Box>
    );
};

export default Form;