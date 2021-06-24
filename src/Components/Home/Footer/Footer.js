import React from 'react';
import navLogo from '../../../Imgs/AirplaneIcon.png';
import fbIcon from '../../../Imgs/fbIcon.png';
import linkedInIcon from '../../../Imgs/linkedInIcon.png';
import instaIcon from '../../../Imgs/instaIcon.png';
import twitterIcon from '../../../Imgs/twitterIcon.png';
import './Footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-5 footer-card">
                        <div className='d-flex'>
                            <div>
                                <img className='navImg' style={{ width: '50px', margin: '0 0' }} src={navLogo} alt="" />
                            </div>
                            <div>
                                <h3 className='brand-name'>Air-Craft</h3>
                            </div>
                        </div>
                        <p className='footer-border text-light py-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                        </p>
                        <p className='text-light mb-3'>
                            &copy; Copyright 2021 Air-Craft. All Rights Reserved
                        </p>
                    </div>
                    <div className="col-md-4 py-5 footer-card">
                        <h4 className='text-light'>Information</h4>
                        <li><a className='text-light ' href="#">About Us</a></li>
                        <li><a className='text-light ' href="#">Blog</a></li>
                        <li><a className='text-light ' href="#">Contact Us</a></li>
                        <li><a className='text-light ' href="#">Terms of Service</a></li>
                    </div>
                    <div className="col-md-4 py-5 social-icons footer-card">
                        <h4 className='text-light'>Fellow Us</h4>
                        <div className="mt-4">
                            <a href="//fb.com"><img style={{ width: '35px', marginRight: '20px' }} src={fbIcon} alt="" /></a>
                            <a href="//linkedIn.com"><img style={{ width: '35px', marginRight: '20px' }} src={linkedInIcon} alt="" /></a>
                            <a href="//instagram.com"><img style={{ width: '35px', marginRight: '20px' }} src={instaIcon} alt="" /></a>
                            <a href="//twitter.com"><img style={{ width: '35px', marginRight: '20px' }} src={twitterIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;