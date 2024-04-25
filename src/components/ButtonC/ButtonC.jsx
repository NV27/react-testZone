import { useState } from 'react';
import './style.css'

const ButtonC = ({handleClick, text}) => {

    return(
        <>
            <button className="myButton" onClick={handleClick}>{text}</button>
        </>
    )
}

export default ButtonC