export const findDate = (life, day, month, year) => {

}

export const oneWeek =
    [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

export const oneYear =
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

export const makeSunday = (day, value) => {
    switch (day) {
        case "Mon":
            value -= 1;
            break;
        case "Tue":
            value -= 2;
            break;
        case "Wed":
            value -= 3;
            break;
        case "Thu":
            value -= 4;
            break;
        case "Fri":
            value -= 5;
            break;
        case "Sat":
            value -= 6;
            break;
        default:
            break;
    }
    if (value <= -7) {
        value += 7;
    }
    return value
}

export const nextDay = (day) => {
    switch (day) {
        case "Mon":
            return "Tue";
        case "Tue":
            return "Wed";
        case "Wed":
            return "Thu"
        case "Thu":
            return "Fri"
        case "Fri":
            return "Sat"
        case "Sat":
            return "Sun"
        case "Sun":
            return "Mon"
        default:
            return "";
    }
}

export const prevDay = (day) => {
    switch (day) {
        case "Mon":
            return "Sun";
        case "Tue":
            return "Mon";
        case "Wed":
            return "Tue"
        case "Thu":
            return "Wed"
        case "Fri":
            return "Thu"
        case "Sat":
            return "Fri"
        case "Sun":
            return "Sat"
        default:
            return "";
    }
}

export const monthMax = (month, leap) => {
    switch (month) {
        case "Jan":
            return 31;
        case "Feb":
            if (leap) {
                return 29;
            }
            return 28;
        case "Mar":
            return 31;
        case "Apr":
            return 30;
        case "May":
            return 31;
        case "Jun":
            return 30;
        case "Jul":
            return 31;
        case "Aug":
            return 31;
        case "Sep":
            return 30;
        case "Oct":
            return 31;
        case "Nov":
            return 30;
        case "Dec":
            return 31;
        default:
            return null;
    }
}

export const nextMonth = (month) => {
    switch (month) {
        case "Jan":
            return "Feb";
        case "Feb":
            return "Mar";
        case "Mar":
            return "Apr";
        case "Apr":
            return "May";
        case "May":
            return "Jun";
        case "Jun":
            return "Jul";
        case "Jul":
            return "Aug";
        case "Aug":
            return "Sep";
        case "Sep":
            return "Oct";
        case "Oct":
            return "Nov";
        case "Nov":
            return "Dec";
        case "Dec":
            return "Jan";
        default:
            return null;
    }
}

export const prevMonth = (month) => {
    switch (month) {
        case "Jan":
            return "Dec";
        case "Feb":
            return "Jan";
        case "Mar":
            return "Feb";
        case "Apr":
            return "Mar";
        case "May":
            return "Apr";
        case "Jun":
            return "May";
        case "Jul":
            return "Jun";
        case "Aug":
            return "Jul";
        case "Sep":
            return "Aug";
        case "Oct":
            return "Sep";
        case "Nov":
            return "Oct";
        case "Dec":
            return "Nov";
        default:
            return null;
    }
}

export const getMonthIndex = (month) => {
    switch (month) {
        case "Jan":
            return 1;
        case "Feb":
            return 2;
        case "Mar":
            return 3;
        case "Apr":
            return 4;
        case "May":
            return 5;
        case "Jun":
            return 6;
        case "Jul":
            return 7;
        case "Aug":
            return 8;
        case "Sep":
            return 9;
        case "Oct":
            return 10;
        case "Nov":
            return 11;
        case "Dec":
            return 12;
        default:
            return null;
    }
}

export const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}


export const isLeap = (year) => (year % 4 === 0 ? true : false);

export const getId = (index, array) => {
    return index + array[index].year;
}