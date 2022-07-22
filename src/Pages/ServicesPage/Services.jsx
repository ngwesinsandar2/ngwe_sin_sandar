import React from 'react';
import { Grid, Typography, Box, Stack, Card } from '@mui/material';
import { Container } from '@mui/system';
import ServicesStyle from "./service.module.css";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const serviceData = [
    {
        serviceIcon: DesignServicesIcon,
        cardTitle: "Web Design",
        cardBody: "Plan, create and code internet sites and web pages with modern and artful designs.",
    },

    {
        serviceIcon: DevicesIcon,
        cardTitle: "Responsive Design",
        cardBody: "Make web pages render well on a variety of devices and window to ensure usability and satisfaction.",
    },

    {
        serviceIcon: WebIcon,
        cardTitle: "Web Development",
        cardBody: "Develop the graphical user interface of a website using JavaScript library React.",
    },

    {
        serviceIcon: CodeIcon,
        cardTitle: "Clean Code",
        cardBody: "Write code Readable, Maintainable, Testable, Extensible so that other developers can understand.",
    },

    {
        serviceIcon: EngineeringIcon,
        cardTitle: "Maintenance & Support",
        cardBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem facere quasi",
    },

    {
        serviceIcon: AccessTimeFilledIcon,
        cardTitle: "Time Management",
        cardBody: "Manage tasks to finish them in time. lorem lorem lorem lorem",
    },
]

const Services = () => {
    return ( 
        <div id="service">
            <Container maxWidth="xl">

                <Grid container alignItems="center" className={ServicesStyle.gridCon} pt={{xs: 10, sm: 10, md: 0}}>
                    
                    <Box>
                        <Stack textAlign="center" mb={5}>
                            <Typography variant="subtitle2" gutterBottom className={ServicesStyle.smallTitle}>&lt;Services /&gt;</Typography>
                            <Typography variant="h5" className={ServicesStyle.title}>What I Provide</Typography>
                        </Stack>

                        <Grid container spacing={3}>
                              
                            {
                                serviceData.map((sd, index) => {
                                    return(
                                        <Grid item key={index} xs={12} sm={6} md={4}>
                                            <Card variant="outlined" className={ServicesStyle.serviceCard}>
                                                <Box className={ServicesStyle.iconCon} mb={1}>
                                                    <sd.serviceIcon sx={{ fontSize: 30 }} className={ServicesStyle.icon} />
                                                </Box>

                                                <Typography variant="subtitle2" gutterBottom fontWeight="bold"> { sd.cardTitle } </Typography>
                                                <Typography variant="caption"> { sd.cardBody } </Typography>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                                
                        </Grid>
                    </Box>

                </Grid>
            </Container>
        </div>
     );
}
 
export default Services;
