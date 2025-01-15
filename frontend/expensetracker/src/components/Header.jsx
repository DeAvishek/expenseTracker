import React from 'react'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Side from './Side';
import Logout from './Logout';
import { useSelector } from 'react-redux';
const Header = () => {
    const [darkmode, setdarkmode] = useState(false)
    const [sidebar, setsidebar] = useState(false)
    const userdata = useSelector((state) => state.auth.userData)
    const handleBackground = () => {
        const isDarkMode = document.body.style.backgroundColor === 'gray';
        if (isDarkMode) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black'; // Reset text color
            setdarkmode(false)
        } else {
            document.body.style.backgroundColor = 'gray';
            document.body.style.color = 'black'; // Set text color for dark mode
            setdarkmode(true)
        }
    };
    const handlesideBar = () => {
        if (sidebar === true) {
            setsidebar(false)

        } else {
            setsidebar(true)
        }

    }
    return (
        <>
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
                    <div id="logo" className='mx-4'>
                        <Logo />
                    </div>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><b>Expense Tracker</b></a>
                    </div>
                    {userdata && <Logout />}
                    <div className='d-flex' id="moon">
                        {darkmode === true ? (<FontAwesomeIcon onClick={handleBackground} id="sunicon" icon={faSun} />)
                            : (<FontAwesomeIcon onClick={handleBackground} id="moonicon" icon={faMoon} />)}
                    </div>


                </nav>
                <nav className='navbar mx-4'>
                    <div>
                        <FontAwesomeIcon style={{color:'blue'}}onClick={handlesideBar} id='dropdown'size='2x' icon={faCircleChevronDown} />
                    </div>
                </nav>
            </div>
            {sidebar && <Side />}
        </>
    )
}

export default Header
