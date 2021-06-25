import React, { useContext } from 'react';
import { userContext } from '../../../App';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div style={{ minHeight: "100vh", backgroundColor: 'gray' }} className='sidebar'>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <span>Home</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/addRoutes" className="text-white">
                            <span>Add-Routes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addTickets" className="text-white">
                            <span>Add-Tickets</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingStatus" className="text-white">
                            <span>Booking-Status</span>
                        </Link>
                    </li>
                </div>

            </ul>
            <div>
                <Link to="/" className="text-white">
                    <span onClick={() => setLoggedInUser({})} >Logout</span></Link>

            </div>
        </div>
    );
};

export default Sidebar;