import React, { useRef } from 'react';
import { useEffect } from 'react';
import CursorStyle from "./cursor.module.css";

// let mouseCursor = document.querySelector(".cursor_cursor__HCTH6");
// console.log(mouseCursor)

// const cursorFun = (e) => {
//     mouseCursor.style.top = e.pageY + 'px';
//     mouseCursor.style.left = e.pageX + 'px';
// }

// window.addEventListener("mousemove", cursorFun);

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
            <div className={CursorStyle.cursor} ref={cursorRef} ></div>
        </>
     );
}
 
export default Cursor;
