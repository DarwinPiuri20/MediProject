import React from 'react';
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
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const PatientDashboard = () => {
    const nextAppointment = {
        date: '2023-10-20',
        time: '10:00 AM',
        doctor: 'Dr. John Smith',
    };

    const pendingExams = [
        'Blood Test',
        'MRI Scan',
        'X-Ray',
    ];

    return (
        <Box className="patient-dashboard-container">
            <Typography variant="h4" className="patient-dashboard-title">
                Patient Dashboard
            </Typography>

            {/* Next Appointment */}
            <Card className="patient-card">
                <CardContent>
                    <Typography variant="h5" className="patient-card-header">
                        <EventIcon />
                        Next Medical Appointment
                    </Typography>

                    <Box className="patient-detail-row">
                        <ScheduleIcon className="patient-detail-icon" />
                        <Typography variant="body1">
                            <strong>Date:</strong> {nextAppointment.date} | <strong>Time:</strong> {nextAppointment.time}
                        </Typography>
                    </Box>

                    <Box className="patient-detail-row">
                        <PersonIcon className="patient-detail-icon" />
                        <Typography variant="body1">
                            <strong>Doctor:</strong> {nextAppointment.doctor}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Pending Exams */}
            <Card className="patient-card">
                <CardContent>
                    <Typography variant="h5" className="patient-card-header">
                        <MedicalServicesIcon />
                        Pending Medical Exams
                    </Typography>

                    <List className="patient-exam-list">
                        {pendingExams.map((exam, index) => (
                            <ListItem
                                key={index}
                                className="patient-exam-item"
                            >
                                <ListItemIcon sx={{ color: '#1aaf5f', minWidth: '36px' }}>
                                    <MedicalServicesIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={exam}
                                    className="patient-exam-text"
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PatientDashboard;