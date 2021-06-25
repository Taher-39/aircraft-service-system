import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
const AddTickets = () => {
    return (
        <div>
            <div className="aside">
                <Sidebar></Sidebar>
            </div>
            <div className="main">
                <h1 className='text-center text-color'>Add Flight Tickets</h1>
            </div>
        </div>
    );
};

export default AddTickets;