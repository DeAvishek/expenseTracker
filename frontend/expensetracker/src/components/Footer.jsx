import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';  // Import Twitter and LinkedIn icons

const Footer = () => {
    return (
        <footer className="footer d-flex text-center bg-grey">
            <p>© 2025 Your Company. All rights reserved.</p>
            <div className="social-icons mx-5">
                <a href="https://twitter.com" >
                    <FontAwesomeIcon className='mx-4'icon={faLinkedin} size="2x" />
                </a>
                <a href="https://linkedin.com" >
                <FontAwesomeIcon className='mx-4' icon={faTwitter} size='2x' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
