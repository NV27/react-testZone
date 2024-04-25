import { useState } from 'react';
import './style.css';
import ButtonA from '../ButtonA/ButtonA';

const Accordian = ({content}) => {

    const [text, setText] = useState('open');
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        if (showContent){
            setText('open');
            setShowContent(false);
        }
        else{
            setText('close');
            setShowContent(true);
        }
        
    }

    return(
        <div>
            <button className="myButton" onClick={handleClick}>{text}</button>

            {showContent && <p>{content}</p>}
        </div>
    )
}

export default Accordian