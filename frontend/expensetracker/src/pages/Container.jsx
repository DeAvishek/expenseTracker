import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const Container = () => {
  return (
    <div>
      <Header/>
      <div className="main" role="main">
        <Outlet />
      </div>
      <Footer/>
     
    </div>
  )
}

export default Container
