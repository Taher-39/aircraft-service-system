import React, { useContext } from 'react';
import { userContext } from '../../../App';
import navLogo from '../../../Imgs/AirplaneIcon.png';
import './Navbar.css'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-color">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div>
                            <img className='navImg' style={{ width: '50px' }} src={navLogo} alt="" />
                        </div>
                        <h3>Air-Craft</h3>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link ms-5 active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="login">{loggedInUser.email ? <h6>{loggedInUser.name || loggedInUser.email}</h6> : "Log In"}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;