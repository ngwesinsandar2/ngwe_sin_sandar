import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FooterStyle from "./footer.module.css";
import { Divider, Grid, Stack, Box, Link } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return ( 
        <>
            <Container maxWidth="xl">
                <Divider className={FooterStyle.myDivider} />
                <Grid container justifyContent="center" alignItems="center" className={FooterStyle.gridCon}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3} textAlign="center">
                            <Typography variant='h4' className={FooterStyle.logo}>
                                Sandar月
                            </Typography>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Stack alignItems="center">
                                <Box>
                                    <Typography variant='h6' className={FooterStyle.footerLetterTitle}>Services</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Web Design</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Responsive Design</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Web Development</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Clean Code</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Maintenance & Support</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Time Management</Typography>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Stack alignItems="center">
                                <Box>
                                    <Typography variant='h6' className={FooterStyle.footerLetterTitle}>Support</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Get Support</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Contact</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Privacy Policy</Typography>
                                    <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Pricing</Typography>
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Stack direction="row" spacing={2} justifyContent="center">
                                <Box className={FooterStyle.iconCon}>
                                    <Link href="https://www.facebook.com/profile.php?id=100052980773543" className={FooterStyle.iconLink}> <FacebookOutlinedIcon sx={{ fontSize: 30 }} className={FooterStyle.icon} /> </Link>
                                </Box>
                                <Box className={FooterStyle.iconCon}>
                                    <Link href="https://twitter.com/SandarSin" className={FooterStyle.iconLink}> <TwitterIcon sx={{ fontSize: 30 }} className={FooterStyle.icon} /> </Link>
                                </Box>
                                <Box className={FooterStyle.iconCon}>
                                    <Link href="https://www.instagram.com/leo_lol_674/" className={FooterStyle.iconLink}> <InstagramIcon sx={{ fontSize: 30 }} className={FooterStyle.icon} /> </Link>
                                </Box>
                                <Box className={FooterStyle.iconCon}>
                                    <Link href="https://github.com/ngwesinsandar2" className={FooterStyle.iconLink}> <GitHubIcon sx={{ fontSize: 30 }} className={FooterStyle.icon} /> </Link>
                                </Box>
                                <Box className={FooterStyle.iconCon}>
                                    <Link href="#" className={FooterStyle.iconLink}> <LinkedInIcon sx={{ fontSize: 30 }} className={FooterStyle.icon} /> </Link>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Stack textAlign="center">
                        <Typography variant='subtitle2' className={FooterStyle.footerLetter}>&copy;2022 All rights reserved</Typography>
                        <Typography variant='subtitle2' className={FooterStyle.footerLetter}>Privacy Policy</Typography>
                    </Stack>
                </Grid>
            </Container>
        </>
     );
}
 
export default Footer;
