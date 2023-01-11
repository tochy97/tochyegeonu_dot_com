import React from 'react';
import ScrollView from './View/ScrollView';
import { container } from '../../components/common/ClassNames';
import CaroselView from './View/CaroselView';

function CalenderApp({ display }) {
    return (
        <div>
            <ScrollView display={display}/>
            {/* <CaroselView display={display} /> */}
        </div>
    );
}

export default CalenderApp;