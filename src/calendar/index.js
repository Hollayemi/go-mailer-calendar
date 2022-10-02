import React, { useEffect, useState } from 'react';
import {
    DaysOfTheWeek,
    Days,
    monthsArr,
    MonthsOpt,
    YearsArr,
} from './components';
import { setDate } from './func';

const Calendar = () => {
    //January, numOfDays, startFrom
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [monthNum, setMonthNum] = useState(null);
    const [year, setYear] = useState(null);
    const [empty, setEmpty] = useState(1);
    console.log(empty);

    useEffect(() => {
        setDate(
            setDay,
            day,
            setYear,
            year,
            setMonth,
            setMonthNum,
            monthNum,
            setEmpty
        );
    }, [day, year, monthNum]);

    const [numOfDays, setNumOfDays] = useState(31);

    const setMonthsHandler = (e) => {
        let getNumOfDays = monthsArr.filter((choose) => choose[0].month === e);
        setMonth(getNumOfDays[0][0].month);
        setNumOfDays(getNumOfDays[0][1].totNum);
        setMonthNum(getNumOfDays[0][2].monthNum);
    };
    return (
        <section className="w-full h-screen shadow-md flex items-center justify-center">
            <div className="h-[375px] w-[350px] border-2 rounded-t-md">
                <div className="h-10 border-b flex items-center justify-between px-2">
                    <h5 className="text-blue-400 font-[200] text-[14px]">
                        {day ? day + '-' + month + '-' + year : 'Adjust Date'}
                    </h5>
                    <div>
                        <select
                            title="Months"
                            className="w-24 h-7 m-1 border rounded px-2"
                            onChange={(e) => setMonthsHandler(e.target.value)}
                        >
                            <MonthsOpt set={month} monthsArr={monthsArr} />
                        </select>

                        <select
                            title="Months"
                            onChange={(e) => setYear(e.target.value)}
                            className="w-24 m-1 h-7 border rounded px-2"
                        >
                            <YearsArr defaultYear={year} setYear={setYear} />
                        </select>
                    </div>
                </div>
                {/* set days... */}
                <div className="grid gap-4 grid-cols-7 mt-2 px-3">
                    <DaysOfTheWeek />
                    <Days
                        empty={empty + 1}
                        presentDay={day}
                        num={parseInt(numOfDays) + 1}
                        year={year}
                    />
                </div>
            </div>
        </section>
    );
};

export default Calendar;
