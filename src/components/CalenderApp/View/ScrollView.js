import React, { useEffect, useRef, useState } from 'react';
import { FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import { GiStarsStack } from "react-icons/gi";
import { MdToday } from 'react-icons/md';
import { fixedOptionBox, historyContainer, monthContainer, pictureButton, scrollTracker } from '../../common/ClassNames';
import { useWindowDimensions } from '../../common/Functions';
import Loading from '../../common/Loading/Loading';
import Months from '../Months/Months';
import { motion, useScroll, useSpring } from "framer-motion";
import { BiSave } from "react-icons/bi";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { sendData, setData } from '../../../redux/actionCreators/dataActionCreators';
import { element } from 'prop-types';

function ScrollView({ display }) {
    const { isLoggedIn, status, user } = useSelector(
      (state) =>({
        isLoggedIn:state.auth.isLoggedIn, 
        status:state.auth.status,
        user:state.auth.user
    }), shallowEqual);
    const calenderRef = useRef();

    const { height } = useWindowDimensions();

    const dispatch = useDispatch();
    const currentIndex = display.findIndex(element => element.thisMonth === true);
    const birthdayIndex = display.findIndex(element => element.myBirthday === true);
    const graduationIndex = display.findIndex(element => element.myGraduation === true);
    const militaryIndex = display.findIndex(element => element.joinMiliary === true);

    const refs = display.reduce((acc, value, index) => {
        acc[index] = React.createRef();
        return acc;
    }, []);
    
    const handleClick = id => refs[id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });

    let [viewHeight,setViewHeight] = useState(80);

    useEffect(() => {
        if(height <= 740){
            setViewHeight(70);
        }
        else{
            setViewHeight(80);
        }
    }, [height]);
    
    const { scrollYProgress } = useScroll({
        container: document
    });

    return (
        <div className={`${historyContainer} h-[${viewHeight}vh]`} ref={calenderRef}>
            <motion.div className={scrollTracker} style={{ scaleX: scrollYProgress}}/>
            <div className={fixedOptionBox}>
                <div className={pictureButton} onClick={() => handleClick(birthdayIndex)}>
                    <FaBirthdayCake size={25}/>
                </div>
                <div className={pictureButton} onClick={() => handleClick(militaryIndex)}>
                    <GiStarsStack size={29}/>
                </div>
                <div className={pictureButton} onClick={() => handleClick(graduationIndex)}>
                    <FaGraduationCap size={29}/>
                </div>
                <div className={pictureButton} onClick={() => handleClick(currentIndex)}>
                    <MdToday size={29}/>
                </div>
            </div>
            {
                (display && currentIndex && birthdayIndex)
                ?
                display.map((element,index) => (
                    <div key={index} ref={refs[index]}>
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
    );
}

export default ScrollView;