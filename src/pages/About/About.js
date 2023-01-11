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
                    Professional experience creating and maintaining enterprise level web applications and API.
                </div>
                <div className={innerText}>
                    Currently enlisted in the Army National Guard as an infantryman.
                </div>
                <div className={innerText}>
                    Currently employeed by Argodata as a application developer.
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
                <hr className={pageDivider}/>
                <div>
                    <p className={pageHeader}>Experience</p>
                    <div className={doubleStack}>
                        {
                            skillList.map((element, index) => (
                                <motion.div 
                                    key={index} 
                                    className='flex gap-1'
                                    initial={{opacity:0, height:0}}
                                    animate={{opacity:1, height:"auto"}}
                                    transition={{ duration: 1, ease: 'linear', delay: index }}
                                >
                                    <AiOutlineCode className='mt-[4px]'/>
                                    <p className=''>{element}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                    <Contact/>
                </div>

            </div>
    );
}

export default About;