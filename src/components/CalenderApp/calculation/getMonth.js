import { monthMax, makeSunday } from './constants';
import getWeek from './getWeek';

/**
 * Find 1st Sunday of the month value and day
 * Use getWeek to calculate month
 * @param {Number} day 
 * @param {Number} month 
 * @param {Number} value 
 * @param {Number} isLeap 
 * @param {Number} year 
 * @returns {Object}
 */
function getMonth(day, month, value, isLeap, year) {
    const output = {
        data: [],
        year: year,
        month: month
    };

    const max = monthMax(month, isLeap);
    while (value > 1) {
        value -= 7;
    }

    /**
     * We will start from the week Starting from the 1st sunday of the month
     * then calculate to the max date.
     */
    value = makeSunday(day, value);
    day = "Sun";
    let nextWeek = getWeek(day, value, max, year, month);
    while (nextWeek && value <= max && nextWeek[0].value <= max && nextWeek.length) {
        value = value + 7;
        if (nextWeek.length === 7) {
            // Prevents adding empty week if Month starts with Sunday the 1st
            output.data.push(nextWeek);
        }
        value = makeSunday(day, value);
        day = "Sun";
        nextWeek = getWeek(day, value, max, year, month);
    }

    return output;
}

export default getMonth;