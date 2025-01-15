import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
//simple by using store
import { useSelector } from 'react-redux'
const Getuser = () => {
    const userdata = useSelector((state) => state.auth.userData)
    return (
        <>
            {userdata && (
                <div className="container " id='getuser'>
                    <div className="profile-card">
                        {/* User icon */}
                        <div className="user-icon">
                            <FontAwesomeIcon className='mx-3'icon={faUserCircle} size="4x" />
                        </div>
                        {/* User information */}
                        <div className="user-info">
                            <h2>{userdata.name}</h2>
                            <p>{userdata.email}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Getuser
