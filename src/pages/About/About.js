import React, { useState } from 'react';
import { button, centerContainer, innerContainer, innerText, link, myPic, pageDivider, pageHeader, stack } from '../../components/common/ClassNames';
import { motion } from "framer-motion";
import { useWindowDimensions } from '../../components/common/Functions';
import me from '../../components/pics/me.png'

function About() {
    const variants = {
        open: { opacity: 1, height: "auto", x: 0 },
        closed: { opacity: 0, height: "0", x: "-100%" },
    }
    const [isResumeOpen, setIsResumeOpen] = useState(true)

    const { width, height } = useWindowDimensions();

    return (
        <div className={stack + ' justify-items-center'}>
            <img className={myPic} src={me} alt="Me" />
            <div className={innerText}>
                Practicing software developer with a B.S. in Computer Science from the University of Texas at Arlington.
            </div>                  
            <p className={button + 'cursor-pointer text-center'} onClick={() => setIsResumeOpen(!isResumeOpen)}>Resume</p>
            <motion.div
                animate={isResumeOpen ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
                <div className={centerContainer}>
                    <iframe src="https://drive.google.com/file/d/1S4w82XwdNZATUdfBj3Lzz5W0ZnX1a0Px/preview" width={(width < 875 || height < 475) ? "fit" : "640"} height={(width < 875 || height < 525) ? "fit" : "480"} allow="autoplay">
                        <a href='https://drive.google.com/file/d/1S4w82XwdNZATUdfBj3Lzz5W0ZnX1a0Px/view?usp=sharing'>Download</a>
                    </iframe>
                </div>
            </motion.div>
            <article className={innerContainer + centerContainer + stack}>       
                <h1 className={pageHeader + 'text-center'}>About</h1>      
                <p className={innerText + 'indent-12 '}>
                    My name is Tochy and I am a Nigerian born American living in Texas. I have lived in Texas most of my life. My family first flew to the city of Garland when I was 4 years old. School was an interesting experience. I got into the gifted and talented program which gave me the opportunity to take advanced classes earlier than the curriculum scheduled.
                </p>
                <p className={innerText + 'indent-12 '}>
                    I got kinda lazy during high school but I was able to find my passion in software development. I took an AP comp sci class and even though I did not pass the actual exam, I recruited all my friends to sign up for it the next year. I took advantage of being the teacher aid for the AP comp sci class the following year and found another passion for teaching. I took both of these passions home with me and threw it onto my 2 younger brothers and now they are both on track to become better developers than I am.
                </p>
                <p className={innerText + 'indent-12 '}>
                    I got super focused in community college, joining the Phi Theta Kappa Honor Society and transferring to UTA with 2 scholarships. University was honestly a wild experience but completely worth every second. I admit to struggling when I first transferred trying to find a balance in life, work and school. I eventually joined the army to both help pay for school and get some much needed discipline. I am no longer in the army but I carry the lessons with me. I truly believe in finding joy in work. There is so many beautiful things in life and computer science give people nearly unlimited tools to create more beautiful things.                
                </p>
                <aside className={innerText + 'indent-12 '}>
                    This website is a simple react app deployed with Google Firebase CI/CD.
                </aside>
                <aside className={innerText + 'indent-12 '}>
                    The history page is something i wrote for fun. I use todays date to calculate the week, the week is used to calculate the month, the month is used calculate year, then i use the year calculation to go all the way back to my birthday. - <a className={link} href='https://github.com/tochy97/tochyegeonu_dot_com'>Souce code. </a>
                    Enjoy the bubbles!
                </aside>
            </article>
        </div>
    );
}

export default About;