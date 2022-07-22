import { Box, Grid, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import AboutImg from "../../assests/images/aboutimg.png";
import AboutStyle from "./about.module.css";
import Css from "../../assests/images/css-3.png";
import Bs from "../../assests/images/bootstrap.png";
import Html from "../../assests/images/html.png";
import Js from "../../assests/images/js.png";
import React from "../../assests/images/logo512.png";
import Figma from "../../assests/images/figma.png";
import Xd from "../../assests/images/xd.png";
import Ps from "../../assests/images/photoshop.png";

const designSkill = [
    {
        id: 1,
        skillImg: Ps,
        skill: "Photoshop",
    },

    {
        id: 2,
        skillImg: Xd,
        skill: "AdobeXd",
    },

    {
        id: 3,
        skillImg: Figma,
        skill: "Figma",
    },
]

const frontendSkill = [
    {
        id: 1,
        skillImg: Html,
        skill: "HTML",
    },

    {
        id: 2,
        skillImg: Css,
        skill: "CSS",
    },

    {
        id: 3,
        skillImg: Bs,
        skill: "Bootstrap",
    },

    {
        id: 4,
        skillImg: Js,
        skill: "JavaScript",
    },

    {
        id: 5,
        skillImg: React,
        skill: "React",
    },
]

const About = () => {
    return ( 
        <div id='about' name="about">
            <Container maxWidth="xl">
                <Grid container pt={{xs: 10, sm: 10, md: 0}} direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center" className={AboutStyle.gridCon}>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" gutterBottom className={AboutStyle.smallTitle}>&lt;AboutMe /&gt;</Typography>
                        <Typography variant="h5" className={AboutStyle.name}>My name is Ngwe Sin Sandar and <br /> I'm a front-end developer</Typography>
                        <Typography variant="body2" mb={3} className={AboutStyle.develop}>I'm a front-end developer from <b>Myanmar</b> who is comfortable working with React and responsive web design to deliver exceptional customer experience. <br /> I'm 18years old and I've finished matriculation. I'm available for freelance.</Typography>

                        <Typography variant="h6" className={AboutStyle.follow}>What Skills I Have</Typography>
                        <Stack>
                            <Box>
                                <Typography variant="body2" gutterBottom className={AboutStyle.skillTitle}>Web Design</Typography>
                                <Stack direction="row" mb={1} flexWrap="wrap">
                                    {
                                        designSkill.map(d => {
                                            return(
                                                <Stack key={d.id} spacing={1} direction="row" alignItems="center" className={AboutStyle.skillCon} mb={1} mr={1}>
                                                    <Box className={AboutStyle.skillImgCon}>
                                                        <img src={d.skillImg} alt="photoshop" className={AboutStyle.skillImg} />
                                                    </Box>
                                                    <Typography className={AboutStyle.skill}>{d.skill}</Typography>
                                                </Stack>
                                            )
                                        })
                                    }
                                </Stack>

                                <Typography variant="body2" gutterBottom className={AboutStyle.skillTitle}>Front-End Development</Typography>
                                <Stack direction="row" flexWrap="wrap">
                                    {
                                        frontendSkill.map(d => {
                                            return(
                                                <Stack key={d.id} spacing={1} direction="row" alignItems="center" className={AboutStyle.skillCon} mb={1} mr={1}>
                                                    <Box className={AboutStyle.skillImgCon}>
                                                        <img src={d.skillImg} alt="photoshop" className={AboutStyle.skillImg} />
                                                    </Box>
                                                    <Typography className={AboutStyle.skill}>{d.skill}</Typography>
                                                </Stack>
                                            )
                                        })
                                    }
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                    
                    <Grid item xs={12} md={5}>
                        <img src={AboutImg} className={AboutStyle.myImg} alt="MyPhoto" />
                    </Grid>

                </Grid>
            </Container>
        </div>
     );
}
 
export default About;
