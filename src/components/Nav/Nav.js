import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { button, modalContainer, navBar, navComponentContainer, navContainer, navSettings, navTitle, navTitleContainer, pictureButton, stack, submitButton, subNavContainer } from '../common/ClassNames';
import { IoOptionsOutline, IoClose } from "react-icons/io5";
import { useWindowDimensions } from "../common/Functions";
import { IoMdSettings } from "react-icons/io";
import SubBar from './SubBar/SubBar';
import Modal from '../common/Modal/Modal';
import { motion } from "framer-motion"

function Nav() {
    const [settingVisible, setSettingVisible] = useState(false);
    const settingRef = useRef();

    const [subVisible, setSubVisible] = useState(false);
    const { width } = useWindowDimensions();
    const navRef = useRef();

    const rightSide =
        <>
            <div className={`${navComponentContainer}  ml-[24px]`}>
                <Link to="/history" onClick={() => setSubVisible(!subVisible)} className={navTitle}>History</Link>
            </div>
        </>

    return (
        <>
            <nav className={navBar} ref={navRef}>
                <div className={navContainer}>
                    <div className={`${navTitleContainer} ${navComponentContainer}`}>
                        <Link onClick={() => setSubVisible(false)} to="/" className={navTitle}>
                            Tochy Egeonu
                        </Link>
                    </div>
                    {
                        (width < 1024)
                            ?
                            <>
                                <div className={`h-auto visible cursor-pointer mt-2 ${navComponentContainer}`} onClick={() => setSubVisible(!subVisible)}>
                                    {
                                        subVisible
                                            ?
                                            <IoClose size={25} />
                                            :
                                            <IoOptionsOutline size={25} />
                                    }
                                </div>
                                {
                                    (subVisible)
                                    &&
                                    <div className={subNavContainer}>
                                        {rightSide}
                                    </div>
                                }
                            </>

                            :
                            <div className={'flex bg-white'}>
                                {rightSide}
                            </div>

                    }
                </div>
            </nav>
        </>
    );
}

export default Nav;