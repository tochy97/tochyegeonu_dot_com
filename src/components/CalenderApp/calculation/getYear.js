import getMonth from "./getMonth";
import getNextMonth from "./getNextMonth";
import getPrevMonth from "./getPrevMonth";
import { getMonthIndex } from "./constants";

/**
 * Calculate Year starting at anymonth
 * User getMonth to get the Month objects
 * @param {String} today 
 * @param {Boolean} isLeap 
 * @param {Number} year 
 * @param {Boolean} isNow 
 * @returns {Object}
 */
function getYear(stringDay, isLeap, year, isNow, monthIndex) {

    let day = stringDay.split(' ')[0];
    let month = stringDay.split(' ')[1];
    let value = parseInt(stringDay.split(' ')[2]);

    /**
     * Get current month
     */
    const thisMonth = getMonth(day, month, value, isLeap, year);
    const output = [
        {
            year: year,
            month: month,
            thisMonth: (isNow ? true : false),
            info: thisMonth,
            index: getMonthIndex(month)
        }
    ];

    let next = getNextMonth(thisMonth, isLeap);
    let nextMonth = getMonth(next.day, next.month, next.value, isLeap, year);

    /**
     * Get all the months from the original to December.
     */
    if (month !== "Dec") {
        while (next.month !== "Dec") {
            output.push(
                {
                    year: year,
                    month: next.month,
                    thisMonth: false,
                    info: nextMonth,
                    index: getMonthIndex(next.month)
                }
            );

            next = getNextMonth(nextMonth, isLeap);
            nextMonth = getMonth(next.day, next.month, next.value, isLeap, year);
        }
        output.push(
            {
                year: year,
                month: next.month,
                thisMonth: false,
                info: nextMonth,
                index: getMonthIndex(next.month)
            }
        );
    }
    
    /**
     * Get all the months from the original to January.
     */
    let prev = getPrevMonth(thisMonth, isLeap);
    let prevMonth = getMonth(prev.day, prev.month, prev.value, isLeap, year);
    if (month !== "Jan") {
        while (prev.month !== "Jan") {
            output.unshift(
                {
                    year: year,
                    month: prev.month,
                    thisMonth: false,
                    info: prevMonth,
                    index: getMonthIndex(prev.month)
                }
            );
            prev = getPrevMonth(prevMonth, isLeap);
            prevMonth = getMonth(prev.day, prev.month, prev.value, isLeap, year);
        }

        output.unshift(
            {
                year: year,
                month: prev.month,
                thisMonth: false,
                info: prevMonth,
                index: getMonthIndex(prev.month)
            }
        );
    }
    return output;
}

export default getYear;