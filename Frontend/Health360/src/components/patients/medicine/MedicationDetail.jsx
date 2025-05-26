import React from 'react';
import './medicationDetail.css'
import {
    Box,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

const MedicationDetails = () => {
    const medications = [
        {
            name: 'Metformin',
            frequency: 'Twice a day',
            duration: '6 months',
            type: 'diabetes'
        },
        {
            name: 'Lisinopril',
            frequency: 'Once a day',
            duration: '3 months',
            type: 'blood-pressure'
        },
        {
            name: 'Atorvastatin',
            frequency: 'Once a day',
            duration: 'Indefinite',
            type: 'cholesterol'
        },
    ];

    const getMedicationIcon = (type) => {
        switch(type) {
            case 'diabetes':
                return <MedicationIcon />;
            case 'blood-pressure':
                return <MonitorHeartIcon />;
            case 'cholesterol':
                return <LocalHospitalIcon />;
            default:
                return <MedicationIcon />;
        }
    };

    return (
        <Box >
            <Card className="medication-card" sx={{ mb: 3 }}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #1aaf5f, #83c55c)'
                }} />

                <CardContent>
                    <Typography variant="h5" className="medication-card-header">
                        <MedicationIcon className="medication-icon" />
                        Current Medications
                    </Typography>

                    <List className="medication-list">
                        {medications.map((medication, index) => (
                            <ListItem
                                key={index}
                                className="medication-list-item"
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'rgba(131, 197, 92, 0.05)'
                                    }
                                }}
                            >
                                <ListItemIcon className="medication-icon">
                                    {getMedicationIcon(medication.type)}
                                </ListItemIcon>
                                <ListItemText
                                    primary={medication.name}
                                    secondary={`Frequency: ${medication.frequency} | Duration: ${medication.duration}`}
                                    primaryTypographyProps={{ className: "medication-list-primary" }}
                                    secondaryTypographyProps={{ className: "medication-list-secondary" }}
                                />
                                {medication.status && (
                                    <Box
                                        className={`medication-status ${medication.status}`}
                                        sx={{
                                            display: 'inline-block',
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            ml: 'auto'
                                        }}
                                    >
                                        {medication.status}
                                    </Box>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MedicationDetails;