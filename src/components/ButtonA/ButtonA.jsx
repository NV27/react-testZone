import { useState } from 'react';
import './style.css'

const ButtonA = ({defaultClickCount}) => {

    const [clickCount, setClickCount] = useState(defaultClickCount);

    const handleClick = () => {
        setClickCount(clickCount*clickCount);
        console.log("clicked: " + clickCount);
    }

    return(
        <>
            <button className="myButton" onClick={handleClick}>{clickCount}</button>
        </>
    )
}

export default ButtonA