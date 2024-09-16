import React from 'react';
import CalenderApp from '../../components/CalenderApp/CalenderApp';

function History({ display, today }) {
    return (
        <div>
            <CalenderApp display={display} today={today}/>
        </div>
    );
}

export default History;