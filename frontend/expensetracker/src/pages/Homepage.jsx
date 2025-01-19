import React from 'react'
import Monthsummary from '../components/Monthsummary'
import Chart from '../components/Chart'
import Expenses from '../components/Expenses'
import Expenseformpage from './Expenseformpage'
import Button from '../components/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Homepage = ({ width = 400, height = 300 }) => {
  const [form, setform] = useState(false)
  const handleForm = () => {
    setform(true);
  }
  const userdata = useSelector((state) => state.auth.userData)
  return (
    <>
      {userdata !== null ? (<div className='container' id='homepage'>
        {/* Summary and Chart Section */}
        <div className='d-flex' id='homeCharts'>
          <div id='homeline' style={{ width, height }} >
            <Monthsummary />
          </div>
          <div id="homepie" style={{ width, height }}>
            <Chart />
          </div>
          <div id='addexpense'>
            <Link to='/expense_tracker/expense-form'> <Button onclick={handleForm} className='btn btn-lg btn-primary '>Add expense</Button></Link>
          </div>
        </div>
        <div className='my-3' id='homeexpense' >
          <Expenses />
        </div>
        {/* <div id='addexpense'>
          <Link to='expense_tracker/expense-form'> <Button onclick={handleForm} className='btn btn-lg btn-primary '>Add expense</Button></Link>
          {form && <Expenseformpage />}
        </div> */}

      </div>) : (<h2 className='text-red mx-5'>Unauthorized to access .... <Link to='/expense_tracker/login'>Login</Link></h2>)}
    </>
  );
}

export default Homepage
