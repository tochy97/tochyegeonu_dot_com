import { nextDay, nextMonth } from "./constants";


/**
 * Find value and day for beggining of the next month
 * Based on the previously calculated month
 * @param {Object} thisMonth 
 * @returns {Object}
 */
function getNextMonth(thisMonth) {
    let output = {
        month: nextMonth(thisMonth.month),
        day: "",
        value: 0
    }
    // Last week of previously calculated month
    const week = thisMonth.data[thisMonth.data.length - 1]
    if (week[week.length - 1].value !== 0) {
        // If the last day is valid thats what we return
        output.value = 1;
        output.day = nextDay(week[week.length - 1].day);
    }
    else {
        let index = week.length - 1;
        while (index >= 0) {
            if (week[index].value !== 0) {
                // Gets last valid day
                output.value = 1;
                output.day = nextDay(week[index].day);
                break;
            }
            index--;
        }
    }
    return output;
}

export default getNextMonth;