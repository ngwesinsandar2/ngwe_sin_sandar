import { Stack } from '@mui/material';
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ThemeStyle from "./themeBtn.module.css"
import { ThemeContext } from '../../App';
import { useContext } from 'react';

const ThemeBtn = () => {
    const value = useContext(ThemeContext)

    return ( 
        <>
            <Stack onClick={value.switchTheme} className={ThemeStyle.btnCon}>
                {
                    value.theme === "light" ? <DarkModeIcon /> : <LightModeIcon />
                }
            </Stack>
        </>
     );
}
 
export default ThemeBtn;
