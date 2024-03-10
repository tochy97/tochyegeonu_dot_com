import React, { useEffect, useRef, useState } from 'react';
import { FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import { MdToday } from 'react-icons/md';
import { fixedOptionBox, historyContainer, pictureButton, scrollTracker } from '../../common/ClassNames';
import { useWindowDimensions } from '../../common/Functions';
import Loading from '../../common/Loading/Loading';
import Months from '../Months/Months';
import { motion, useScroll } from "framer-motion";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

function StaticView({ display }) {
    const { isLoggedIn, status, user } = useSelector(
      (state) =>({
        isLoggedIn:state.auth.isLoggedIn, 
        status:state.auth.status,
        user:state.auth.user
    }), shallowEqual);
    const calenderRef = useRef();

    const { height } = useWindowDimensions();

    const dispatch = useDispatch();
    const currentIndex = display.findIndex(element => element.status === "thisMonth");
    const birthdayIndex = display.findIndex(element => element.myBirthday === true);
    const graduationIndex = display.findIndex(element => element.myGraduation === true);
    
    const refs = display.reduce((acc, value, index) => {
        acc[index] = React.createRef();
        return acc;
    }, []);
    
    const handleClick = id => refs[id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });

    let [viewHeight,setViewHeight] = useState(80);

    const { scrollYProgress } = useScroll({
        container: document
    });
    
    useEffect(() => {
        if(height <= 740){
            setViewHeight(70);
        }
        else{
            setViewHeight(80);
        }
    }, [height]);
    

    return (
        <div className={`${historyContainer} h-[${viewHeight}vh] snap-y snap-mandatory`}>
            <motion.div className={scrollTracker} style={{ scaleX: scrollYProgress}}/>
            <div className={fixedOptionBox}>
                <div className={pictureButton} onClick={() => handleClick(birthdayIndex)}>
                    <FaBirthdayCake size={25}/>
                </div>
                <div className={pictureButton} onClick={() => handleClick(graduationIndex)}>
                    <FaGraduationCap size={29}/>
                </div>
                <div className={pictureButton} onClick={() => handleClick(currentIndex)}>
                    <MdToday size={29}/>
                </div>
            </div>
            <div ref={calenderRef}>
            {
                (display && currentIndex && birthdayIndex)
                ?
                display.map((element,index) => (
                    <div className="snap-center" key={index} ref={refs[index]}>
                        <Months 
                            thisMonth={element} 
                            id={index + 1} 
                            year={element.year}
                        />
                    </div>
                ))
                :
                <Loading/>
            }
            </div>
        </div>
    );
}

export default StaticView;