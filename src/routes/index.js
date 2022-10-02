import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CalendarRoute } from './Routes';

const KickOff = () => {
    return (
        <BrowserRouter>
            <CalendarRoute />
        </BrowserRouter>
    );
};

export default KickOff;
