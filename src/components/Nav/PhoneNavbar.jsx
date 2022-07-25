import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PhNavStyle from "./phonenavbar.module.css";
// import { Link } from '@mui/material';
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

export default function PhoneNavbar() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={PhNavStyle.menuBarCon}>
        {pages.map((text, index) => (
          <ListItem key={index} disablePadding className={PhNavStyle.menuBar}>
            <ListItemButton>
                {/* <Link className={PhNavStyle.myLink} href={text.idHref}> <ListItemText primary={text.navigation} /> </Link> */}
                <Link key={index} to={text.idHref} activeClass={PhNavStyle.active} spy={true} smooth={true} duration={500} offset={-70} className={PhNavStyle.myLink}> { text.navigation } </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer("top", true)}>
            <div className={PhNavStyle.menuIcon} id="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
          </Button>
          <Drawer
            anchor="top"
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            {list("top")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}