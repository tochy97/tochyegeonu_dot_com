import React from 'react';
import { IoSyncCircleOutline } from "react-icons/io5";

function Loading({ size }) {
    return (
        <div className='w-full h-full flex place-content-center'>
            <IoSyncCircleOutline className='animate-spin' size={size}/>
        </div>
    );
}

export default Loading;