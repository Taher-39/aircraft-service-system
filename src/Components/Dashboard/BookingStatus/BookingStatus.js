import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookingStatus = () => {
    return (
        <div>
            <div className="aside">
                <Sidebar></Sidebar>
            </div>
            <div className="main">
                <h1 className='text-center text-color'>Total Booking Status</h1>
            </div>
        </div>
    );
};

export default BookingStatus;