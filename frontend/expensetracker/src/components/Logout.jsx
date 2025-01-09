import React from 'react'
import { logout as authLogout} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import Button from './Button'
const Logout = () => {
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch(authLogout());
    }
  return (
    <div>
        <Button onClick={logout}>Log out</Button>
    </div>
  )
}

export default Logout
