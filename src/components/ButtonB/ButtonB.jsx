import { useState } from 'react';
import './style.css'

const ButtonB = ({handleClick}) => {

    return(
        <>
            <button className="myButton" onClick={handleClick}>open modal</button>
        </>
    )
}

export default ButtonB