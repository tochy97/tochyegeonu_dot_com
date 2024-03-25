import { oneWeek } from "./constants";

function getWeek(day, value, max)
{
    if(value <= -7)
    {
        return null;
    }

    const output = []
    const today = day;

    const nextsunday = value + 7;
    let index = 0;
    while(value < 1)
    {
        value++;
        index++;
        output.push(
            {
            day: "",
            value: 0
        })
    }
    day = oneWeek[index]
    output.push(
        {
        day: day,
        value: value
    })

    let weekIndex;
    while((value < nextsunday - 1 ) && (max > 0 && value < max))
    {
        weekIndex = oneWeek.indexOf(day);
        day = oneWeek[weekIndex + 1];
        value++;
        output.push(
            {
            day: day,
            value: value
        })
    }
    while(output.length < 7)
    {
        output.push(
            {
            day: "",
            value: 0
        })
    }
    return output;
}

export default getWeek;