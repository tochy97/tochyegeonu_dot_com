import React from 'react';
import { container, innerContainer, pageTitle } from '../../components/common/ClassNames';
import About from '../About/About';

function Main() {

    return (
        <main className={container}>
            <p className={pageTitle}>Welcome</p>
            <About />
        </main>
    );
}

export default Main;