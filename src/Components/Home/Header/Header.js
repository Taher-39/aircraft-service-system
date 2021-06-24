import React from 'react';
import bannerIcon from '../../../Imgs/airplane1.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header className="air-craft-banner">
                <img className="team-stadium" src={bannerIcon} width="100%" height="350vh" />
                <div className="text-overly p-3">
                    <p>Happy Journey life with</p>
                    <h1 style={{ color: '#3A4256' }}>Air-Craft</h1>
                    <p className='pt-4 pb-2 text-secondary'>
                        The airline inventory system may or may not be integrated with the reservation system.
                        The system contains all the airline’s flights and the available seats. 
                        The main function of the inventory system is to define how  
                        many seats are available on a particular flight by opening.
                    </p>
                    <button className="btn btn-color text-light">Details Air-Craft</button>
                </div>
                <div className="color-overlay"></div>
            </header>
        </div>
    );
};

export default Header;