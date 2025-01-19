import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserTie, faFileInvoice,faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Side = () => {
    const userdata = useSelector((state) => state.auth.userData)
    return (
        <>
        {userdata !==null && <div className='sidebar' >
            <Sidebar id='sidebar'>
                <Menu>
                    <SubMenu label="Account">
                        <MenuItem component={<Link to="/expense_tracker/user" />}>
                            <FontAwesomeIcon icon={faUserTie} />
                            User
                        </MenuItem>
                        <MenuItem component={<Link to="/expense_tracker/signup" />}> Sign Up </MenuItem>
                        <MenuItem component={<Link to="/expense_tracker/login" />}> Log In </MenuItem>
                    </SubMenu>
                    <MenuItem component={<Link to="/expense_tracker/home" />}>
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                    </MenuItem>
                    <MenuItem component={<Link to="/expense_tracker/all-expenses" />}>
                        <FontAwesomeIcon icon={faFileInvoice} />
                        Expenses
                    </MenuItem>
                    <MenuItem>
                        <FontAwesomeIcon icon={faChartSimple} />
                        MonthLy Summary
                    </MenuItem>
                    {/* <MenuItem > Log Out </MenuItem> */}
                </Menu>
            </Sidebar>
        </div>}
        </>
    )
}

export default Side