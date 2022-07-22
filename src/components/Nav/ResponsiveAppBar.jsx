import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavStyle from "./appbar.module.css"
import { Stack } from '@mui/material';
import PhoneNavbar from './PhoneNavbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from "react-scroll";

const pages = [
    {
        idHref: "home",
        navigation: "<Home />",
    },

    {
        idHref: "about",
        navigation: "<AboutMe />",
    },

    {
        idHref: "portfolio",
        navigation: "<Portfolio />",
    },

    {
        idHref: "service",
        navigation: "<Services />",
    },

    {
        idHref: "contact",
        navigation: "<ContactMe />",
    },
]

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const ResponsiveAppBar = () => {
    // const [activeNav, setActiveNav] = useState({
    //     activeObject: null,
    //     pages: [
    //         {
    //             idHref: "home",
    //             navigation: "<Home />",
    //         },
        
    //         {
    //             idHref: "about",
    //             navigation: "<AboutMe />",
    //         },
        
    //         {
    //             idHref: "portfolio",
    //             navigation: "<Portfolio />",
    //         },
        
    //         {
    //             idHref: "service",
    //             navigation: "<Services />",
    //         },
        
    //         {
    //             idHref: "contact",
    //             navigation: "<ContactMe />",
    //         },
    //     ]
    // })

    // const toggleActive = (index) => {
    //     setActiveNav({...activeNav, activeObject: activeNav.pages[index]})
    // }
    
  return (
    <>
        <HideOnScroll>
            <AppBar position="fixed" className={NavStyle.myAppbar}>
                <Container maxWidth="xl">
                    <Toolbar className={NavStyle.toolbar}>
                        <Typography variant='h5' className={NavStyle.logo}>
                            Sandar月
                        </Typography>

                        <Stack direction="row" spacing={2} display={{ xs: 'none', sm: 'none', md: "flex" }}>
                            {
                                pages.map((p, index) => {
                                    return (
                                        // <Link key={index} href={p.idHref} className={NavStyle.myLink}> <Button className={activeNav.pages[index] === activeNav.activeObject ? `${NavStyle.myNavBtn} ${NavStyle.active}` : `${NavStyle.myNavBtn} ${NavStyle.inactive}`} onClick={() => {toggleActive(index)}}>{p.navigation}</Button> </Link>
                                        <Link key={index} to={p.idHref} activeClass={NavStyle.active} spy={true} smooth={true} duration={500} offset={-70} className={NavStyle.myLink}> { p.navigation } </Link>
                                    )
                                })
                            }
                        </Stack>

                        <Stack display={{ xs: 'flex', md: "none" }}>
                            <PhoneNavbar />
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    </>
  );
};
export default ResponsiveAppBar;