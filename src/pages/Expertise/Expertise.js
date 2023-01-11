import React from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

function Expertise(props) {
    return (
        <div>
            <ProgressBar name="Javascript" per="w-[60%]" />
            <ProgressBar name="HTML" per="w-[60%]" />
            <ProgressBar name="Git" per="w-[80%]" />
        </div>
    );
}

export default Expertise;