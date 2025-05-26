import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Chip,
    Divider,
    Badge
} from '@mui/material';
import {
    LocalPharmacy as PharmacyIcon,
    Person as PersonIcon,
    Inventory as InventoryIcon,
    MedicalServices as MedsIcon,
    PendingActions as PendingIcon,
    AssignmentTurnedIn as DispatchedIcon,
    CheckCircle as CheckIcon,
    Warning as WarningIcon,
    AccessTime as TimeIcon
} from '@mui/icons-material';

const PharmacyDetails = () => {
    const pharmacyInfo = {
        name: 'Farmacia Central',
        dispatcher: 'Juan Pérez',
        status: 'Abierto',
        schedule: 'Lun-Vie: 8:00 AM - 8:00 PM'
    };

    const stock = [
        { name: 'Paracetamol', quantity: 50, status: 'optimal' },
        { name: 'Ibuprofeno', quantity: 30, status: 'optimal' },
        { name: 'Amoxicilina', quantity: 20, status: 'low' },
        { name: 'Omeprazol', quantity: 5, status: 'critical' }
    ];

    const pendingPrescriptions = [
        { id: 1, patient: 'Carlos López', medication: 'Paracetamol', time: 'Hace 2 horas' },
        { id: 2, patient: 'Ana García', medication: 'Ibuprofeno', time: 'Hace 1 hora' }
    ];

    const dispatchedPrescriptions = [
        { id: 3, patient: 'Luis Martínez', medication: 'Amoxicilina', time: 'Hoy 10:30 AM' },
        { id: 4, patient: 'María Fernández', medication: 'Paracetamol', time: 'Hoy 9:15 AM' }
    ];

    const getStatusChip = (status) => {
        switch(status) {
            case 'optimal':
                return <Chip icon={<CheckIcon />} label="Óptimo" sx={{ bgcolor: '#e8f5e9', color: '#1aaf5f' }} size="small" />;
            case 'low':
                return <Chip icon={<WarningIcon />} label="Bajo" sx={{ bgcolor: '#fff3e0', color: '#ff9800' }} size="small" />;
            case 'critical':
                return <Chip icon={<WarningIcon />} label="Crítico" sx={{ bgcolor: '#ffebee', color: '#f44336' }} size="small" />;
            default:
                return <Chip label="Desconocido" size="small" />;
        }
    };

    return (
        <Box sx={{
            p: 3,
            backgroundColor: '#f5f9f7',
            minHeight: '100vh'
        }}>
            {/* Header */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                gap: 2
            }}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <Avatar sx={{
                            bgcolor: '#83c55c',
                            width: 24,
                            height: 24,
                            border: '2px solid #f5f9f7'
                        }}>
                            <CheckIcon sx={{ fontSize: '1rem' }} />
                        </Avatar>
                    }
                >
                    <Avatar sx={{
                        bgcolor: '#1aaf5f',
                        width: 56,
                        height: 56
                    }}>
                        <PharmacyIcon fontSize="large" />
                    </Avatar>
                </Badge>
                <Box>
                    <Typography variant="h4" sx={{
                        fontWeight: 700,
                        color: '#1aaf5f',
                        fontFamily: 'ui-monospace, monospace'
                    }}>
                        Panel Farmacéutico
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: '#2d3748',
                        fontFamily: 'ui-monospace, monospace'
                    }}>
                        Gestión de inventario y recetas médicas
                    </Typography>
                </Box>
            </Box>

            {/* Grid Layout */}
            <Grid container spacing={3}>
                {/* Pharmacy Info */}
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{
                        height: '100%',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(26, 175, 95, 0.15)',
                        borderLeft: '4px solid #1aaf5f',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 16px rgba(26, 175, 95, 0.2)'
                        }
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2,
                                gap: 2
                            }}>
                                <Avatar sx={{
                                    bgcolor: '#e8f5e9',
                                    width: 40,
                                    height: 40,
                                    color: '#1aaf5f'
                                }}>
                                    <PharmacyIcon fontSize="medium" />
                                </Avatar>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    fontFamily: 'ui-monospace, monospace',
                                    color: '#1aaf5f'
                                }}>
                                    Información de la Farmacia
                                </Typography>
                            </Box>

                            <List dense>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            bgcolor: '#e8f5e9',
                                            width: 32,
                                            height: 32,
                                            color: '#1aaf5f'
                                        }}>
                                            <PersonIcon fontSize="small" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Nombre"
                                        primaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            color: '#2d3748'
                                        }}
                                        secondary={pharmacyInfo.name}
                                        secondaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            fontWeight: 500,
                                            color: '#1aaf5f'
                                        }}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" sx={{ bgcolor: '#83c55c' }} />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            bgcolor: '#e8f5e9',
                                            width: 32,
                                            height: 32,
                                            color: '#1aaf5f'
                                        }}>
                                            <PersonIcon fontSize="small" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Encargado"
                                        primaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            color: '#2d3748'
                                        }}
                                        secondary={pharmacyInfo.dispatcher}
                                        secondaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            fontWeight: 500,
                                            color: '#1aaf5f'
                                        }}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" sx={{ bgcolor: '#83c55c' }} />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            bgcolor: '#e8f5e9',
                                            width: 32,
                                            height: 32,
                                            color: '#1aaf5f'
                                        }}>
                                            <CheckIcon fontSize="small" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Estado"
                                        primaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            color: '#2d3748'
                                        }}
                                        secondary={pharmacyInfo.status}
                                        secondaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            fontWeight: 500,
                                            color: '#1aaf5f'
                                        }}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" sx={{ bgcolor: '#83c55c' }} />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            bgcolor: '#e8f5e9',
                                            width: 32,
                                            height: 32,
                                            color: '#1aaf5f'
                                        }}>
                                            <TimeIcon fontSize="small" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Horario"
                                        primaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            color: '#2d3748'
                                        }}
                                        secondary={pharmacyInfo.schedule}
                                        secondaryTypographyProps={{
                                            fontFamily: 'ui-monospace, monospace',
                                            fontWeight: 500,
                                            color: '#1aaf5f'
                                        }}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Stock */}
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{
                        height: '100%',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(26, 175, 95, 0.15)',
                        borderLeft: '4px solid #1aaf5f',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 16px rgba(26, 175, 95, 0.2)'
                        }
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2,
                                gap: 2
                            }}>
                                <Avatar sx={{
                                    bgcolor: '#e8f5e9',
                                    width: 40,
                                    height: 40,
                                    color: '#1aaf5f'
                                }}>
                                    <InventoryIcon fontSize="medium" />
                                </Avatar>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    fontFamily: 'ui-monospace, monospace',
                                    color: '#1aaf5f'
                                }}>
                                    Inventario Actual
                                </Typography>
                            </Box>

                            <List dense>
                                {stock.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{
                                                    bgcolor: '#e8f5e9',
                                                    width: 32,
                                                    height: 32,
                                                    color: '#1aaf5f'
                                                }}>
                                                    <MedsIcon fontSize="small" />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.name}
                                                primaryTypographyProps={{
                                                    fontFamily: 'ui-monospace, monospace',
                                                    color: '#2d3748'
                                                }}
                                                secondary={`${item.quantity} unidades`}
                                                secondaryTypographyProps={{
                                                    fontFamily: 'ui-monospace, monospace',
                                                    fontWeight: 500,
                                                    color: '#1aaf5f'
                                                }}
                                            />
                                            <Box>
                                                {getStatusChip(item.status)}
                                            </Box>
                                        </ListItem>
                                        {index < stock.length - 1 && <Divider variant="inset" component="li" sx={{ bgcolor: '#83c55c' }} />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Prescriptions */}
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(26, 175, 95, 0.15)',
                        borderLeft: '4px solid #ff9800',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 16px rgba(26, 175, 95, 0.2)'
                        }
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2,
                                gap: 2
                            }}>
                                <Avatar sx={{
                                    bgcolor: '#fff3e0',
                                    width: 40,
                                    height: 40,
                                    color: '#ff9800'
                                }}>
                                    <PendingIcon fontSize="medium" />
                                </Avatar>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    fontFamily: 'ui-monospace, monospace',
                                    color: '#ff9800'
                                }}>
                                    Recetas Pendientes
                                </Typography>
                            </Box>

                            <List dense>
                                {pendingPrescriptions.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{
                                                    bgcolor: '#e8f5e9',
                                                    width: 32,
                                                    height: 32,
                                                    color: '#1aaf5f'
                                                }}>
                                                    <PersonIcon fontSize="small" />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.patient}
                                                primaryTypographyProps={{
                                                    fontFamily: 'ui-monospace, monospace',
                                                    color: '#2d3748'
                                                }}
                                                secondary={
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{
                                                            fontFamily: 'ui-monospace, monospace',
                                                            fontWeight: 500,
                                                            color: '#1aaf5f'
                                                        }}>
                                                            {item.medication}
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.75rem',
                                                            color: '#2d3748',
                                                            fontFamily: 'ui-monospace, monospace',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        }}>
                                                            <TimeIcon fontSize="inherit" />
                                                            {item.time}
                                                        </span>
                                                    </Box>
                                                }
                                            />
                                        </ListItem>
                                        {index < pendingPrescriptions.length - 1 && <Divider variant="inset" component="li" sx={{ bgcolor: '#83c55c' }} />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Dispatched Prescriptions */}
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(26, 175, 95, 0.15)',
                        borderLeft: '4px solid #4caf50',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 16px rgba(26, 175, 95, 0.2)'
                        }
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2,
                                gap: 2
                            }}>
                                <Avatar sx={{
                                    bgcolor: '#e8f5e9',
                                    width: 40,
                                    height: 40,
                                    color: '#1aaf5f'
                                }}>
                                    <DispatchedIcon fontSize="medium" />
                                </Avatar>
                                <Typography variant="h6" sx={{
                                    fontWeight: 600,
                                    fontFamily: 'ui-monospace, monospace',
                                    color: '#1aaf5f'
                                }}>
                                    Recetas Despachadas
                                </Typography>
                            </Box>

                            <List dense>
                                {dispatchedPrescriptions.map((item, index) => (
                                    <React.Fragment key={item.id}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar sx={{
                                                    bgcolor: '#e8f5e9',
                                                    width: 32,
                                                    height: 32,
                                                    color: '#1aaf5f'
                                                }}>
                                                    <PersonIcon fontSize="small" />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.patient}
                                                primaryTypographyProps={{
                                                    fontFamily: 'ui-monospace, monospace',
                                                    color: '#2d3748'
                                                }}
                                                secondary={
                                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{
                                                            fontFamily: 'ui-monospace, monospace',
                                                            fontWeight: 500,
                                                            color: '#1aaf5f'
                                                        }}>
                                                            {item.medication}
                                                        </span>
                                                        <span style={{
                                                            fontSize: '0.75rem',
                                                            color: '#2d3748',
                                                            fontFamily: 'ui-monospace, monospace',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px'
                                                        }}>
                                                            <TimeIcon fontSize="inherit" />
                                                            {item.time}
                                                        </span>
                                                    </Box>
                                                }
                                            />
                                        </ListItem>
                                        {index < dispatchedPrescriptions.length - 1 && <Divider variant="inset" component="li" sx={{ bgcolor: '#83c55c' }} />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PharmacyDetails;