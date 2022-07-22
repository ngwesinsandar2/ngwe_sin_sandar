import { Grid, Typography, Box, Stack, Link, Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ProjectsStyle from "./project.module.css";
import project1 from "../../assests/images/project1.png";
import project2 from "../../assests/images/project2.png";
import project3 from "../../assests/images/project3.png";
import project4 from "../../assests/images/project4.png";

const projectData = [
    {
        projectLink: "https://musicui.leoleo26.repl.co/",
        projectImg: project1,
        projectTitle: "Music Project",
        projectBody: "This project contains a lot of songs to listen. Listening to music can relax your mind and body.",
        sourceCode: "",
        demoText: "Click to see Demo",
    },

    {
        projectLink: "https://dhbootstrap5project1.leoleo26.repl.co/",
        projectImg: project2,
        projectTitle: "Business Website",
        projectBody: "This is the team portfolio website.",
        sourceCode: "https://github.com/ngwesinsandar2/DH-B5-Project1",
        demoText: "Click to see Demo",
    },

    {
        projectLink: "https://digitalhunter.leoleo26.repl.co/",
        projectImg: project3,
        projectTitle: "Digital Hunter",
        projectBody: "This is the website of the company of Digital Hunter.",
        sourceCode: "https://github.com/ngwesinsandar2/Digital-Hunter",
        demoText: "Click to see Demo",
    },

    {
        projectLink: "https://admindashboard.leoleo26.repl.co/",
        projectImg: project4,
        projectTitle: "Admin Dashboard",
        projectBody: "This is the admin dashboard project.",
        sourceCode: "https://github.com/ngwesinsandar2/DH-B5-Project2-AdminDashboard",
        demoText: "Click to see Demo",
    },
]

const Projects = () => {
    return ( 
        <div id="portfolio">
        <Container maxWidth="xl">

            <Grid container alignItems="center" className={ProjectsStyle.gridCon} pt={{xs: 10, sm: 10, md: 0}}>
                
                <Box>
                    <Stack textAlign="center" mb={5}>
                        <Typography variant="subtitle2" gutterBottom className={ProjectsStyle.smallTitle}>&lt;Portfolio /&gt;</Typography>
                        <Typography variant="h5" className={ProjectsStyle.title}>My Last Projects</Typography>
                    </Stack>

                    <Grid container spacing={5}>

                        {
                            projectData.map((pd, index) => {
                                return(
                                    <Grid item key={index} xs={12} md={6}>
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item md={8}>
                                                <Box className={ProjectsStyle.projectImgCon} position="relative">
                                                    <img src={ pd.projectImg } className={ProjectsStyle.projectImg} alt="" /> 
                                                    <Link href={ pd.projectLink } target="_blank" className={ProjectsStyle.myLink}> 
                                                        <Box className={`${ProjectsStyle.imageHoverBox} ${ProjectsStyle.fade}`}>{pd.demoText}</Box>
                                                    </Link>
                                                </Box>
                                            </Grid>

                                            <Grid item md={4}>
                                                <Box>
                                                    <Typography variant="h6" className={ProjectsStyle.title}> { pd.projectTitle } </Typography>
                                                    <Typography gutterBottom variant="body2"> { pd.projectBody } </Typography>
                                                    <Link href={ pd.sourceCode } className={ProjectsStyle.myLink}><Button className={ProjectsStyle.myBtn}>Source Code</Button></Link>
                                                </Box>
                                            </Grid>
                                        </Grid>
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
 
export default Projects;
