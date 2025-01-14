import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserTie, faFileInvoice,faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Side = ({logout}) => {
    return (
        <div className='sidebar'>
            <Sidebar id='sidebar'>
                <Menu>
                    <SubMenu label="Account">
                        <MenuItem>
                            <FontAwesomeIcon icon={faUserTie} />
                            User
                        </MenuItem>
                        <MenuItem component={<Link to="/signup" />}> Sign Up </MenuItem>
                        <MenuItem component={<Link to="/login" />}> Log In </MenuItem>
                    </SubMenu>
                    <MenuItem component={<Link to="/home" />}>
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                    </MenuItem>
                    <MenuItem component={<Link to="/all-expenses" />}>
                        <FontAwesomeIcon icon={faFileInvoice} />
                        Expenses
                    </MenuItem>
                    <MenuItem>
                        <FontAwesomeIcon icon={faChartSimple} />
                        MonthLy Summary
                    </MenuItem>
                    <MenuItem onClick={console.log("hii")}> Log Out </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default Side