import React, { useEffect, useRef, useState } from 'react';
import { FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import { MdToday } from 'react-icons/md';
import { fixedOptionBox, historyContainer, pictureButton, scrollTracker } from '../../common/ClassNames';
import { useWindowDimensions } from '../../common/Functions';
import Loading from '../../common/Loading/Loading';
import Months from '../Months/Months';
import { motion, useScroll } from "framer-motion";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

function DynamicView () {
    return (
        <></>
    )
}