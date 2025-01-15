import React from 'react'
import { logout as authLogout } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { useNavigate } from 'react-router-dom'


const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout =  () => {
      localStorage.removeItem('bearerToken')
      dispatch(authLogout());
      navigate('/login')
    }  
  return (
    <>
      <Button className='btn btn-sm btn-warning' id="logoutbtn" onClick={logout}>Log out</Button>
    </>
  )
}

export default Logout
