import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';  // Import Twitter and LinkedIn icons

const Footer = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" id="footer">
            <h6>© 2025 Expense Tracker. All rights reserved.</h6>
            <div className="social-icons mx-5">
                <a href="https://twitter.com" >
                    <FontAwesomeIcon className='mx-1' icon={faLinkedin} size="2x" />
                </a>
                <a href="https://linkedin.com/in/avishek-patra-95ba08321" >
                    <FontAwesomeIcon className='mx-1' icon={faTwitter} size='2x' />
                </a>
                <a href='https://github.com/DeAvishek'>
                    <FontAwesomeIcon icon={faGithub} size='2x' className='mx-1' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
