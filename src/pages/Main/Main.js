import React from 'react';
import { container, innerContainer, pageTitle } from '../../components/common/ClassNames';
import About from '../About/About';

function Main() {

    return (
        <main className={container}>
            <p className={pageTitle}>Welcome</p>
            <div className={innerContainer}>
                <About />
            </div>
        </main>
    );
}

export default Main;