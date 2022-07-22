import React from 'react';
import loaderStyle from "./loader.module.css"

const Loader = () => {
    return ( 
        <>
            <div className={loaderStyle.loaderCon}>
                <span className={loaderStyle.loader}></span>
            </div>
        </>
     );
}
 
export default Loader;