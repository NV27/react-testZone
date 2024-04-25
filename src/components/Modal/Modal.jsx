import { useState } from 'react';
import './style.css';

const Modal = ({isOpen}) => {

    return(
        <div>
            {isOpen && <h2>I'm a modal</h2>}
        </div>
    )
}

export default Modal