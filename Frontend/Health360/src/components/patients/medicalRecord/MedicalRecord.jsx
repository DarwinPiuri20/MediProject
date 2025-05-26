import React from 'react';
import './medicalRecord.css'
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
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const MedicalRecord = () => {
    const lastDiagnosis = {
        date: '2023-10-15',
        diagnosis: 'Hypertension - Blood pressure elevated, medication adjusted.',
    };

    const triageSummary = {
        bloodPressure: '140/90 mmHg',
        heartRate: '85 bpm',
        temperature: '98.6°F',
    };

    return (
        <Box >
            <Typography variant="h4" className="medical-record-title">
                Medical Record
            </Typography>

            {/* Last Diagnosis */}
            <Card className="medical-record-card">
                <CardContent>
                    <Typography variant="h5" className="medical-record-card-header">
                        <AssignmentIcon className="medical-record-icon" />
                        Last Diagnosis
                    </Typography>
                    <Typography className="medical-record-detail">
                        <strong>Date:</strong> {lastDiagnosis.date}
                    </Typography>
                    <Typography className="medical-record-detail">
                        <strong>Diagnosis:</strong> {lastDiagnosis.diagnosis}
                    </Typography>
                </CardContent>
            </Card>

            {/* Triage Summary */}
            <Card className="medical-record-card">
                <CardContent>
                    <Typography variant="h5" className="medical-record-card-header">
                        <MonitorHeartIcon className="medical-record-icon" />
                        Triage Summary
                    </Typography>
                    <List className="medical-record-list">
                        <ListItem className="medical-record-list-item">
                            <ListItemIcon className="medical-record-icon">
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Blood Pressure"
                                secondary={triageSummary.bloodPressure}
                                primaryTypographyProps={{ className: "medical-record-list-primary" }}
                                secondaryTypographyProps={{ className: "medical-record-list-secondary" }}
                            />
                        </ListItem>
                        <ListItem className="medical-record-list-item">
                            <ListItemIcon className="medical-record-icon">
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Heart Rate"
                                secondary={triageSummary.heartRate}
                                primaryTypographyProps={{ className: "medical-record-list-primary" }}
                                secondaryTypographyProps={{ className: "medical-record-list-secondary" }}
                            />
                        </ListItem>
                        <ListItem className="medical-record-list-item">
                            <ListItemIcon className="medical-record-icon">
                                <ThermostatIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Temperature"
                                secondary={triageSummary.temperature}
                                primaryTypographyProps={{ className: "medical-record-list-primary" }}
                                secondaryTypographyProps={{ className: "medical-record-list-secondary" }}
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MedicalRecord;