import React from 'react';
import { container, innerContainer, innerText, pageDivider, pageHeader, pageTitle } from '../../components/common/ClassNames';
// import Collapse from '../../components/common/Collapse/Collapse';
// import me from '../../components/pics/me.png';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import About from '../About/About';
import { useWindowDimensions } from '../../components/common/Functions';
// import { motion } from "framer-motion";
// import Contact from '../Contact/Contact';

function Main({ calender }) {
    const { isLoggedIn, status, user } = useSelector(
      (state) =>({
        isLoggedIn:state.auth.isLoggedIn, 
        status:state.auth.status,
        user:state.auth.user
    }), shallowEqual);

    const { height } = useWindowDimensions();

    const objects = [
        // {
        //     title: <p className={pageHeaderClickable}>Contact</p>,
        //     content: [<Contact/>],
        //     open: false
        // },
        {
            title: null,
            content: [<About/>],
            open: true
        }
    ];
    
    return (
        <main className={container}>
            <p className={pageTitle}>Welcome</p>
                {objects.map((element,index) => (
                    <div key={index} className={innerContainer}>
                        {
                        element.title
                        &&
                            <>
                                {element.title}
                                <hr className={pageDivider}/>
                            </>
                        }
                        {element.content}
                    </div>
                ))}
        </main>
    );
}

export default Main;