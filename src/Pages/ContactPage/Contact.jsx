import React from 'react';
import { Box, Grid, Stack, TextField, Typography, Button, Link } from '@mui/material';
import { Container } from '@mui/system';
import ContactStyle from "./contact.module.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import { useState } from 'react';
import { SiMessenger } from 'react-icons/si';

const social = [
    {
        contactIcon: SiMessenger,
        linkHref: "https://m.me/profile.php?id=100052980773543",
        linkTitle: "Messenger",
    },

    {
        contactIcon: EmailIcon,
        linkHref: "mailto:ngwesinsandar112@gmail.com",
        linkTitle: "ngwesinsandar112@gmail.com",
    },

    {
        contactIcon: LocalPhoneIcon,
        linkHref: "tel:09757978569",
        linkTitle: "09757-978-569",
    },
]

const Contact = () => {
    const form = useRef();
    const [reply, setReply] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6pxa09t', 'template_567gnwb', form.current, '3DgKoQLCGR4MKLvda')
          .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()

        setReply("Thanks, I will reply as soon as possible^^")
    };

    return ( 
        <>
            <Container maxWidth="xl" id="contact" name="contact">
                <Grid container justifyContent="center" alignItems="center" className={ContactStyle.gridCon} py={{xs: 10, sm: 10, md: 0}}>

                    <Stack textAlign="center" mb={5}>
                        <Typography variant="subtitle2" gutterBottom className={ContactStyle.smallTitle}>&lt;ContactMe /&gt;</Typography>
                        <Typography variant="h5" className={ContactStyle.name}>Get In Touch</Typography>
                    </Stack>

                    <Grid container direction="row" spacing={{ xs: 5 }} justifyContent="center" alignItems="center">

                        <Grid item xs={12} md={6}>
                            <Stack spacing={3}>
                                {social.map((s, index) => {
                                    return(
                                        <Stack key={index} direction="row" alignItems="center" spacing={1}>
                                            <Box className={ContactStyle.contactIconCon}>
                                                <s.contactIcon sx={{ fontSize: 30 }} className={ContactStyle.icon} />
                                            </Box>
                                            <Link href={s.linkHref} className={ContactStyle.contactLink}>{s.linkTitle}</Link>
                                        </Stack>
                                    )
                                })}
                            </Stack>
                        </Grid>

                        <Grid item md={6}>
                            <form ref={form} onSubmit={sendEmail}>
                                <TextField className={ContactStyle.contactInput} name="name" type="text" required fullWidth label="Name" variant="standard" />
                                <TextField className={ContactStyle.contactInput} name="email" type="email" required fullWidth label="Email" variant="standard" />
                                <TextField className={ContactStyle.contactInput} name="subject" type="text" fullWidth label="Subject" variant="standard" />
                                <TextField className={ContactStyle.contactInput} name="message" fullWidth multiline rows={5} label="Message" variant="standard" />
                                <Button type="submit" className={ContactStyle.myBtn}>Send Message</Button>
                            </form>
                            <Typography mt={3}>{reply}</Typography>
                        </Grid>
                    
                    </Grid>

                </Grid>
            </Container>
        </>
     );
}
 
export default Contact;