import React from 'react'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState ,useEffect} from 'react';
import Side from './Side';
import Logout from './Logout';
import axios from 'axios'
const url=process.env.REACT_APP_URL_LINK;
const Header = () => {
    const [darkmode, setdarkmode] = useState(false)
    const [sidebar, setsidebar] = useState(false)
    const [logout, setlogout] = useState(false)
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
    const getUser=async()=>{
        try {
            const token=localStorage.getItem('bearerToken');
            const headers={
                'bearer':`${token}`
            }
            const response= await axios.get(`${url}/user`,{headers})
            if(response.status===200){
                setlogout(true)
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
      getUser()
    }, [logout])
    

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
                <div id="logo" className='mx-4'>
                    <Logo />
                </div>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>Expense Tracker</b></a>
                </div>
                 {logout &&<Logout/>}
                <div className='d-flex' id="moon">
                    {darkmode === true ? (<FontAwesomeIcon onClick={handleBackground} id="sunicon" icon={faSun} />)
                        : (<FontAwesomeIcon onClick={handleBackground} id="moonicon" icon={faMoon} />)}
                </div>
               

            </nav>
            <nav className='navbar mx-4'>
                <div>
                    <FontAwesomeIcon onClick={handlesideBar} id="sunicon" icon={faCircleChevronDown} />
                </div>
            </nav>
            {sidebar && <Side />}
        </>
    )
}

export default Header
