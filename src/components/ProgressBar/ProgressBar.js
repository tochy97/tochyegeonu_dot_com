import React, { useState } from 'react';
import { motion } from "framer-motion"

function ProgressBar({ name, per }) {
    const [visible, setVisible] = useState(true);
    return (
        <div className="grid">
        <div className='justify-start grid grid-cols-2'>
            <p className='grid justify-items-start ml-5'>{name}</p> 
        </div>
        <div className="col-start-1 w-full bg-gray-200 rounded-full h-[20px] dark:bg-gray-400">
            <motion.div 
                className={`bg-yellow-400 h-[20px] rounded-full transition duration-150 ease-in-out ${per}`}
            >
            </motion.div>
        </div>
        </div>
    );
}

export default ProgressBar;