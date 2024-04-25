import { useState } from 'react';
import './style.css'

const ButtonA = ({defaultClickCount, iWin}) => {

    const [clickCount, setClickCount] = useState(defaultClickCount);
    


    const handleClick = () => {
        setClickCount(clickCount*clickCount);
        console.log("clicked: " + clickCount);

        if (clickCount == "Infinity"){
            iWin();
            console.log("I win")
        }

    }
        

    return(
        <>
            <button className="myButton" onClick={handleClick}>{clickCount}</button>
        </>
    )
}

export default ButtonA