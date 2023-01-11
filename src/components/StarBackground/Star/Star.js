import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { GiPolarStar } from 'react-icons/gi';
import HoverBox from '../../HoverBox/HoverBox';
import { star } from '../../common/ClassNames';

function Star({ startX, startY, startDir, size }) {
    const viewport_width = window.screen.width;
    const [isDone, setIsDone] = useState(startDir);
    const [isClicked, setIsClicked] = useState(false);

    const variants = {
        left : { x: viewport_width - viewport_width, opacity:1 },
        right : { x: viewport_width - 50, opacity:1 },
    };
    
    const leftRoight = (latest) => {
        if(latest.x >= viewport_width - 50){
            setIsDone(true);
        }
        if(latest.x < 1){
            setIsDone(false);
        }
    };

    return (
        <motion.div
            initial = {{ 
                x: startX,
                y: startY
            }}
            animate = { !isDone ?  
                "right" :
                "left"
            }
            transition = {{
                x: { duration: Math.floor(Math.random() * (30 - 15) + 15) },
            }}
            variants={variants}
            onUpdate={leftRoight} 
        >
            <div className={
                size === "large" ? `w-10 h-10 ring-2 rounded-3xl ${star}` :
                size === "medium" ? `w-7 h-7 ring-2 rounded-2xl ${star}` :
                `w-4 h-4 ring-2 rounded-lg ${star}`}>
                <HoverBox/>
            </div>
        </motion.div>
    );
}

export default Star;