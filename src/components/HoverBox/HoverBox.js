import React, { useRef, useState } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { innerText } from '../common/ClassNames';

function HoverBox({ content }) {
    const [hover, setHover] = useState(false);
    
    return (
        <motion.div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${innerText} cursor-pointer w-fit`}
            animate={ hover ? { scale: 2, opacity: 1 } : { opacity: 0, scale: -2}}
        >
                {content}
        </motion.div>
    );
}

export default HoverBox;