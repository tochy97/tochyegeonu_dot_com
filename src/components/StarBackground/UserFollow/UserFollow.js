import React from 'react';
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from '../../useFollowPointer/useFollowPointer';
import { BsFillCircleFill } from 'react-icons/bs';


function UserFollow(props) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
    return (
        <motion.div
            ref={ref}
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001
            }}
        >
            <BsFillCircleFill size={45}/>
        </motion.div>
    );
}

export default UserFollow;