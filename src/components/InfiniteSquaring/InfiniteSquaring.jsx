import { useState } from 'react';
import ButtonA from '../ButtonA/ButtonA';

const InfiniteSquaring = () => {

    const [winFunction, setWinFunction] = useState(false);
    const [iWon, setiWon] = useState(false);

    let winText = false;

    const iWin = () => {
        setiWon(true);
    }

    return(
        <>
        <div>
            <ButtonA defaultClickCount={2} iWin={iWin}/>
            <ButtonA defaultClickCount={3} iWin={iWin}/>
        </div>

        {iWon && <h2>You Win"</h2>}
        </>
    )
}

export default InfiniteSquaring