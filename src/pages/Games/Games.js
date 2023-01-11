import React from 'react';
import { useLocation } from 'react-router-dom';
import { container } from '../../components/common/ClassNames';
import Runner from '../../games/Runner/Runner';

function Games() {
    let location = useLocation().state;
    const chosen = location?.chosen;

    return (
        <div className={container}>
        {
            chosen === "runner" ?
            <Runner/>
            : <>Chose a game</>
        }
        </div>
    );
}

export default Games;