export const setDate = (
    setDay,
    day,
    setYear,
    year,
    setMonth,
    setMonthNum,
    monthNum,
    setEmpty
) => {
    if (!year && !monthNum && !day) {
        const d = new Date();

        setMonthNum(parseInt(d.getMonth()));
        setMonth(d.toString().split(' ')[1]);
        setDay(d.getDate());
        setEmpty(d.getDay());
        setYear(d.getFullYear());

        setEmpty(new Date(d.getFullYear(), d.getMonth(), 1).getDay());
    } else {
        const d = new Date(year, monthNum, day, 10, 33);
        console.log(d.getDay());
        setEmpty(new Date(d.getFullYear(), d.getMonth(), 1).getDay());
    }
};

export const checkForEmptyDays = (day, empty) => {
    let tot = day % 7;
    return tot + empty;
};
