import React from 'react';
import { centerContainer, doubleStack, innerText, pageDivider, pageHeader, pageHeaderClickable, stack } from '../../components/common/ClassNames';
import { AiOutlineCode } from "react-icons/ai";
import { motion } from "framer-motion";
import Collapse from '../../components/common/Collapse/Collapse';
import Contact from '../Contact/Contact';
import { useWindowDimensions } from '../../components/common/Functions';

function About() {
    const skillList = ["Javascript", "HTML", "CSS", "SQL", "Java", ];
    const {width, height} = useWindowDimensions();
    
    return (
            <div className={stack}>
                <div className={innerText}>
                    I am a practicing software developer with a B.S. in Computer Science from the University of Texas at Arlington.
                </div>
                <div className={innerText}>
                    The history page is something i wrote for fun. It is all Javascript base. I use todays date to calculate the week, the week is used to calculate the month, the month is used calculate year, then i use the year calculation to go all the way back to my birthday.
                    Enjoy the bubbles!
                </div>
                <hr className={pageDivider}/>
                <div className={centerContainer}>
                    <div className={stack}>
                        <p className={`${pageHeader} text-center`}>Resume</p>
                        <iframe src="https://drive.google.com/file/d/1S4w82XwdNZATUdfBj3Lzz5W0ZnX1a0Px/preview" width={(width < 875 || height < 475) ? "fit" : "640"} height={(width < 875 || height < 525) ? "fit" : "480"} allow="autoplay">
                            <a href='https://drive.google.com/file/d/1S4w82XwdNZATUdfBj3Lzz5W0ZnX1a0Px/view?usp=sharing'>Download</a>
                        </iframe>
                    </div>
                </div>
            </div>
    );
}

export default About;