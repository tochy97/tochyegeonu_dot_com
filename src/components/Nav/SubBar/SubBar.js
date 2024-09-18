import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import { navComponentContainer, subNavTitle } from '../../common/ClassNames';

function SubBar({ trigger, content }) {
    const [visible, setVisible] = useState(false);

    const subBarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (subBarRef.current && !subBarRef.current.contains(event.target)) {
                setVisible(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [subBarRef]);

    return (
        <div
            className='flex flex-wrap'
        >
            <div onClick={() => setVisible(true)}>
                {trigger}
            </div>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={visible ? { opacity: 1, width: "auto", marginTop: "4px" } : { opacity: 0, width: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "linear",
                }}
                ref={subBarRef}
            >
                {visible && content}
            </motion.div>
        </div>
    );
}

export default SubBar;