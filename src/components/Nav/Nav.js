import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { navBar, navComponentContainer, navContainer, navTitle, navTitleContainer, subNavComponent, subNavContainer, subNavHeader } from '../common/ClassNames';
import SubBar from './SubBar/SubBar';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { IoOptionsOutline, IoClose } from "react-icons/io5";
import { useWindowDimensions } from "../common/Functions";
import { logoutUser } from '../../redux/actionCreators/authActionCreators';

function Nav() {
    const { error, loaded, isLoggedIn } = useSelector(
      (state) =>({
        error: state.auth.error,
        loaded: state.auth.loaded,
        isLoggedIn: state.auth.isLoggedIn
    }), shallowEqual);

    const objects = [
        // {
        //     title: "Social",
        //     content: [
        //         <div className={subNavHeader}>
        //             <div className={subNavContainer}>
        //                 <div>
        //                     <a target="_blank" rel="noreferrer" className={`${subNavComponent}`} href="https://www.linkedin.com/in/tochukwu-egeonu-79935a127/">
        //                         <span className="mx-2">LinkedIn</span>
        //                     </a>
        //                 </div>
        //                 <div>
        //                     <a target="_blank" rel="noreferrer" className={`${subNavComponent} `} href="https://www.facebook.com/tochy.egeonu">
        //                         <span className="mx-2">Facebook</span>
        //                     </a>
        //                 </div>
        //                 <div>
        //                     <a target="_blank" rel="noreferrer" className={`${subNavComponent}`} href="https://www.instagram.com/chy.toe/">
        //                         <span className="mx-2">Instagram</span>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         ]
        // },
        // {
        //     title: "Games",
        //     content: [
        //         <div className={subNavHeader}>
        //             <ul className={subNavContainer}>
        //                 <li>
        //                     <Link 
        //                         className={`${subNavComponent}`}
        //                         to="games" state= {{ chosen: "snake" }}>
        //                         <span className="mx-2">Snake</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link 
        //                         className={`${subNavComponent}`} 
        //                         to="games" state= {{ chosen: "runner" }}>
        //                         <span className="mx-2">Runner</span>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     ]
        // }
    ];


    const [subVisible, setSubVisible] = useState(false);
    const { width } = useWindowDimensions();
    const navRef = useRef();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (navRef.current && !navRef.current.contains(event.target)) {
    //             setSubVisible(false);
    //         }
    //     }
        
    //     document.addEventListener("mousedown", handleClickOutside);
    // }, [navRef]);
    
    const rightSide = [
        <>
            <div className={`${navComponentContainer}  ml-[24px]`}>
                <Link to="/history" onClick={() => setSubVisible(!subVisible)} className={navTitle}>History</Link>
            </div>
            {/* <div className={navComponentContainer}>
                {
                    !isLoggedIn
                    ?
                    <Link to="/login" onClick={() => setSubVisible(!subVisible)} className={navTitle}>Login</Link>
                    :
                    <div onClick={() => dispatch(logoutUser())} className={navTitle}>Logout</div>
                }
            </div> */}
        </>
    ]

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
                                        <IoClose size={25}/>
                                        :
                                        <IoOptionsOutline size={25}/>
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