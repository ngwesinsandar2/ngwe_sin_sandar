import { Box } from '@mui/material';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import CursorStyle from "./cursor.module.css";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(()=> {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        })
    }, [])
    return ( 
        <>
            <Box className={CursorStyle.cursor} ref={cursorRef} ></Box>
        </>
     );
}
 
export default Cursor;
