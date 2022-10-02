import React from 'react';
import { useRoutes } from 'react-router-dom';
import LazyLoading from '../components/LazyLoading';

//songs
const Calendar = LazyLoading(() => import('../calendar'));

export const CalendarRoute = () => {
    // AuthOutlet
    let allRoutes = useRoutes([
        {
            path: '/',
            element: <Calendar />,
        },
    ]);
    return allRoutes;
};
