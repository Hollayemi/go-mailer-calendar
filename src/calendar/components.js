export const monthsArr = [
    [{ month: 'Jan' }, { totNum: 31 }, { monthNum: 0 }],
    [{ month: 'Feb' }, { totNum: 28 }, { monthNum: 1 }],
    [{ month: 'Mar' }, { totNum: 31 }, { monthNum: 2 }],
    [{ month: 'Apr' }, { totNum: 30 }, { monthNum: 3 }],
    [{ month: 'May' }, { totNum: 31 }, { monthNum: 4 }],
    [{ month: 'Jun' }, { totNum: 30 }, { monthNum: 5 }],
    [{ month: 'Jul' }, { totNum: 31 }, { monthNum: 6 }],
    [{ month: 'Aug' }, { totNum: 31 }, { monthNum: 7 }],
    [{ month: 'Sep' }, { totNum: 30 }, { monthNum: 8 }],
    [{ month: 'Oct' }, { totNum: 31 }, { monthNum: 9 }],
    [{ month: 'Nov' }, { totNum: 30 }, { monthNum: 10 }],
    [{ month: 'Dec' }, { totNum: 31 }, { monthNum: 11 }],
];

export const MonthsOpt = ({ set, monthsArr }) => {
    return monthsArr.map((res, i) => {
        if (set === res[0].month) {
            return (
                <option key={i} selected={true} value={res[0].month}>
                    {res[0].month}
                </option>
            );
        } else {
            return (
                <option key={i} value={res[0].month}>
                    {res[0].month}
                </option>
            );
        }
    });
};

export const YearsArr = ({ defaultYear }) => {
    const years = [];
    for (let i = 2000; i < 2040; i++) {
        years.push(i);
    }

    return years.map((year, i) => {
        if (defaultYear === year) {
            return (
                <option key={i} selected={true} value={year}>
                    {year}
                </option>
            );
        } else {
            return (
                <option key={i} value={year}>
                    {year}
                </option>
            );
        }
    });
};
export const DaysOfTheWeek = () => {
    return (
        <>
            <Column content="Sun" />
            <Column content="Mon" />
            <Column content="Tue" />
            <Column content="Wed" />
            <Column content="Thu" />
            <Column content="Fri" />
            <Column content="Sat" />
        </>
    );
};

export const Days = ({ empty, num, presentDay, year }) => {
    let emptyNess = [];
    for (let i = 1; i < empty; i++) {
        emptyNess.push(i);
    }
    let daysNum = [];
    for (let i = 1; i < num; i++) {
        daysNum.push(i);
    }
    return (
        <>
            {emptyNess.map((res, index) => {
                return <Column key={index} content="" />;
            })}
            {daysNum.map((res, index) => {
                if (presentDay === res && year === new Date().getFullYear()) {
                    return <Column key={index} content={res} select={true} />;
                } else {
                    return <Column key={index} content={res} />;
                }
            })}
        </>
    );
};

const Column = ({ content, select }) => {
    return (
        <div
            className={`flex items-center justify-center border ${
                select
                    ? 'border-blue-500 hover:border-red-600'
                    : 'border-white hover:border-blue-300'
            } h-8`}
        >
            {content}
        </div>
    );
};
