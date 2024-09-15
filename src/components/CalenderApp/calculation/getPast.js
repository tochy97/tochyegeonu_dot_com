import { isLeap, monthMax, prevDay } from './constants';
import getYear from "./getYear";

/**
 * Calculated a nested object of months until you reach endYear
 * @param {Number} endYear 
 * @returns {Array}
 */
function getPast(endYear) {

    const today = new Date();
    let stringDay = (today).toString();
    let year = today.getFullYear();
    let leap = isLeap(today.getFullYear());
    let monthIndex = today.getUTCMonth();

    // Get current year
    const thisYear = getYear(stringDay, leap, year, true, monthIndex);

    year = new Date().getFullYear();
    leap = isLeap(year);

    // Create final output object
    const output =
        [
            {
                year: year,
                data: thisYear,
                status: "thisYear",
                leap: leap
            },
        ]

    let startDay;
    const startMonth = "Dec";
    const startValue = monthMax(startMonth);
    let lastYear = thisYear;

    while (year >= endYear) {
        year--;
        leap = isLeap(year);
        stringDay = startDay + " " + startMonth + " " + startValue;
        /**
         * Since we are going backwards the start day will always be the 
         * day before Dec 1st of the previously processed year
         *  */
        startDay = prevDay(lastYear[0].info.data[0].filter(element => element.value !== 0)[0].day);
        lastYear = getYear(stringDay, leap, year, false, monthIndex);
        output.unshift(
            {
                year: year,
                data: lastYear,
                leap: leap
            }
        );
    }
    return output;
}

export default getPast;