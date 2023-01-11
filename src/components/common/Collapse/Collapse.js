import React, { useState } from 'react';
import { motion } from "framer-motion";
import { pageDivider, stack } from '../ClassNames';

function Collapse({ open, trigger, content }) {
    const [visible, setVisible] = useState(open);
    return (
        <div className={`${stack} snap-y snap-mandatory`}>
            <hr className={pageDivider}/>
            <div className='w-fit' onClick={() => setVisible(!visible)}>
                {trigger}
            </div>
                {content.map((element, index) => (
                    <motion.div
                        className='snap-end'
                        key={index}
                        initial={{ x:"-100%", opacity:0, height:0}}
                        animate={visible ? {opacity:1, height:"auto", x:"+0%"} : {opacity:0, height:0, x:"-100%"}}
                        transition={{ duration: 1, ease: 'linear', delay: index }}
                    >
                        {element}
                    </motion.div>
                ))}
        </div>
    );
}

export default Collapse;