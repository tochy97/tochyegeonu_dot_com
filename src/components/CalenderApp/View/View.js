import React, { useEffect, useState } from 'react';
import { FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import { GiStarsStack } from "react-icons/gi";
import { MdToday } from 'react-icons/md';
import { submitButton, fixedOptionBox, historyContainer, pictureButton, scrollTracker, modalContainer, stack, textField } from '../../common/ClassNames';
import { useWindowDimensions } from '../../common/Functions';
import Loading from '../../common/Loading/Loading';
import Months from '../Months/Months';
import { motion, useScroll } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import Modal from '../../common/Modal/Modal';

/**
 * 
 * @param {Object} display 
 * @returns {ReactDOM}
 */
function ScrollView({ display }) {
    const [goYear, setGoYear] = useState("");
    const [goMonth, setGoMonth] = useState("");
    const today =  new Date();

    let yearOptions = [];

    for (let i = 1997; i <= today.getFullYear(); i++ ) {
        yearOptions.push({display: i, value: i})
    }
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthOptions = [];

    for (let i = 0; i < 12; i++) {
        monthOptions.push({ display: monthNames[i], value: i+1 })
    }

    const { height } = useWindowDimensions();


    const refs = display.reduce((acc, value, index) => {
        acc[index] = {}
        acc[index].ref = React.createRef();
        acc[index].value = value.year + '' + value.index;
        return acc;
    }, []);

    const popView = id => refs[id].ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });

    const search = (year, month) => {
        return refs.findIndex((element) => (element.value === year + '' + month));
    }
    const currentIndex = search(today.getFullYear(), today.getUTCMonth());
    const birthdayIndex = search(1997, 7)
    const graduationIndex = search(2022, 12);
    const militaryIndex = search(2020, 1);

    let [viewHeight, setViewHeight] = useState(80);

    useEffect(() => {
        if (height <= 740) {
            setViewHeight(70);
        }
        else {
            setViewHeight(80);
        }
    }, [height]);

    const { scrollYProgress } = useScroll({
        container: document
    });

    return (
        <div className={`${historyContainer} h-[${viewHeight}vh]`}>
            <motion.div className={scrollTracker} style={{ scaleX: scrollYProgress }} />
            <div className={fixedOptionBox}>
                <div className={pictureButton} onClick={() => popView(birthdayIndex)}>
                    <FaBirthdayCake size={25} />
                </div>
                <div className={pictureButton} onClick={() => popView(militaryIndex)}>
                    <GiStarsStack size={29} />
                </div>
                <div className={pictureButton} onClick={() => popView(graduationIndex)}>
                    <FaGraduationCap size={29} />
                </div>
                <div className={pictureButton} onClick={() => popView(currentIndex)}>
                    <MdToday size={29} />
                </div>
                <div>
                    <Modal
                        trigger={
                            <div className={pictureButton}> <FaSearch size={29} /></div>
                        }
                        content={
                            <>
                                <select className={textField} onChange={(event) => setGoYear(event.target.value)} value={goYear} >
                                    <option value="" disabled defaultValue>Year</option>
                                    {yearOptions.map((option) => 
                                        <option key={option.value} value={option.value}>
                                            {option.display}
                                        </option>
                                    )}
                                </select>
                                <select className={textField} onChange={(event) => setGoMonth(event.target.value)} value={goMonth} >
                                    <option value="" disabled defaultValue>Month</option>
                                    {monthOptions.map((option) => 
                                        <option key={option.value} value={option.value}>
                                            {option.display}
                                        </option>
                                    )}
                                </select>
                                <button className={submitButton} onClick={() => popView(search(goYear, goMonth))}>Go</button>
                            </>
                        }
                        containerClass={modalContainer + stack + " relative"}
                        width="[100px]"
                        height="[50px]"
                        top="0"
                        left="0"
                    />
                </div>
            </div>
            {
                (display && currentIndex && birthdayIndex)
                    ?
                    display.map((element, index) => (
                        <div key={index} ref={refs[index].ref}>
                            <Months
                                thisMonth={element}
                                id={index + 1}
                                year={element.year}
                            />
                        </div>
                    ))
                    :
                    <Loading />
            }
        </div>
    );
}

export default ScrollView;