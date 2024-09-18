import React from 'react';
import { MdToday } from 'react-icons/md';
import { FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import { GiStarsStack } from "react-icons/gi";
import Modal from '../../../common/Modal/Modal';
import { calenderIcons, dayContainer, modalContainer, modalContentContainer, modalHeaderContainer, stack } from '../../../common/ClassNames';

/**
 * Render day box and modal
 * @param {Number} value 
 * @param {String} month 
 * @param {String} year 
 * @param {String} status 
 * @returns 
 */
function Days({ value, month, year, status, borderT, borderB, borderL, borderR }) {

  let icon;
  switch (status) {
    case "today":
      icon = <MdToday />;
      break;
    case "birthday":
      icon = <FaBirthdayCake />;
      break;
    case "graduation":
      icon = <FaGraduationCap />;
      break;
    case "military":
      icon = <GiStarsStack />;
      break;
    default:
      break;
  }

  return (
    <>
      {
        value !== 0 ?
          <Modal
            trigger={
              <div className={dayContainer}>
                {value}
                {(typeof status !== "undefined") && <div className={calenderIcons}>{icon}</div>}
              </div>
            }
            header={
              <div className={modalHeaderContainer}>
                <div className='mr-3'>{month} {value}, {year}</div>
                {(typeof status !== "undefined") && <div className={calenderIcons}>{icon}</div>}
              </div>
            }
            content={
              <div className={modalContentContainer}></div>
            }
            closeButtonclass={'justify-self-center fixed bottom-[15px]'}
            containerClass={modalContainer + stack + " fixed"}
          />
          :
          <div className="md:h-24" />
      }
    </>
  );
}

export default Days;