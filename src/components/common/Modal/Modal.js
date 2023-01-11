import React, { useEffect, useRef, useState } from 'react';
import { closeButton, modalContainer, pageDivider, stack } from '../ClassNames';

function Modal({ trigger, header, content, fullScreen }) {
    const [visible, setVisible] = useState(false);
    const modalRef = useRef();

    // useEffect(() => {
    //     const handleClickOutside = (event) => {

    //     if (modalRef.current && !modalRef.current.contains(event.target)) {
    //         setVisible(false)
    //     }
    //     }
        
    //     document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [modalRef]);

    return (
        <>
            <div onClick={() => setVisible(true)} >
                {trigger}
            </div>
            {
                visible &&
                <div 
                    ref={modalRef} 
                    className={`
                        ${modalContainer} 
                        fixed 
                        top-${fullScreen ? '[75px]' : '[25%]'} 
                        left-${fullScreen ? '0' : '[25%]'} 
                        w-${fullScreen ? 'screen' : '[50%]'} 
                        h-${fullScreen ? 'screen' : '[50%]'} 
                        ${!fullScreen && 'rounded-lg'}`}
                >
                    <div className={stack}>
                    {header}
                    <hr className={pageDivider} />
                    {content}
                    <button className={`${closeButton} + justify-self-center fixed bottom-[15px]`} onClick={() => setVisible(false)} >Close</button>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;