import { Stack } from '@mui/material';
import React from 'react';
import ThemeStyle from "./themeBtn.module.css"
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const ThemeBtn = () => {
    const value = useContext(ThemeContext)

    return ( 
        <>
            <Stack onClick={value.switchTheme} className={ThemeStyle.btnCon}>
                {
                    value.theme === "light" ? <AcUnitIcon /> : <LocalFireDepartmentIcon />
                }
            </Stack>
        </>
     );
}
 
export default ThemeBtn;
