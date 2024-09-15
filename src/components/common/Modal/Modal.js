import React, { useEffect, useRef, useState } from 'react';
import { closeButton, pageDivider, stack } from '../ClassNames';
/**
 * 
 * @param {HTMLObjectElement} trigger 
 * @param {HTMLObjectElement} header 
 * @param {HTMLObjectElement} content 
 * @param {Boolean} fullScreen
 * @returns {ReactDOM}
 */
function Modal({ trigger, header, content, closeButtonclass, containerClass, width, height, top, left }) {
    const [visible, setVisible] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        // Close modal if click outside
        const handleClickOutside = (event) => {

            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setVisible(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    // Default fullscreen
    let w = width ? width : 'screen';
    let h = height ? height : 'screen';
    let t = top ? top : '[75px]';
    let l = left ? left : '0';

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
                        ${containerClass}
                        top-${t} 
                        left-${l} 
                        w-${w} 
                        h-${h} 
                        rounded-lg`}
                >
                    {
                        header ?
                            <>
                                {header}
                                <hr className={pageDivider} />
                            </>
                            :
                            <></>
                    }
                    {content}
                    <button className={closeButton + closeButtonclass} onClick={() => setVisible(false)} >Close</button>
                </div>
            }
        </>
    );
}

export default Modal;