import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddFlightRoutes = () => {
    return (
        <div>
            <div className="aside">
                <Sidebar></Sidebar>
            </div>
            <div className="main">
                <h1 className='text-center text-color'>Add Flight Routes</h1>
            </div>
        </div>
    );
};

export default AddFlightRoutes;