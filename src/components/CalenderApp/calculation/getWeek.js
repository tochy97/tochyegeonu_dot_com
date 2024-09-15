import { oneWeek } from "./constants";

/**
 * Calculate the week from Sunday - Saturday
 * @param {String} day 
 * @param {Number} value 
 * @param {Number} max 
 * @param {Number} year 
 * @param {Number} month 
 * @returns {Array}
 */
function getWeek(day, value, max, year, month) {
    if (value <= -7) {
        return null;
    }

    const output = []

    const nextsunday = value + 7;
    let index = 0;
    // Starting from Sunday
    while (value < 1) {
        // Invalid day placeholder
        value++;
        index++;
        output.push(
            {
                value: 0
            }
        )
    }

    // 1st valid day
    day = oneWeek[index]
    output.push(
        {
            year: year,
            month: month,
            day: day,
            value: value
        }
    )

    let weekIndex;
    while ((value < nextsunday - 1) && (max > 0 && value < max)) {
        weekIndex = oneWeek.indexOf(day);
        day = oneWeek[weekIndex + 1];
        value++;
        output.push(
            {
                year: year,
                month: month,
                day: day,
                value: value
            }
        )
    }
    while (output.length < 7) {
        // Invalid day placeholder
        output.push(
            {
                value: 0
            }
        )
    }
    return output;
}

export default getWeek;