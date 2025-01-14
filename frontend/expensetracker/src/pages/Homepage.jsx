import React from 'react'
import Monthsummary from '../components/Monthsummary'
import Chart from '../components/Chart'
import Expenses from '../components/Expenses'
import Expenseformpage from './Expenseformpage'
import Button from '../components/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Homepage = () => {
  const [form, setform] = useState(false)
  const handleForm=()=>{
    setform(true);
  }
  return (
    <div className='container' id='homepage'>
      {/* Summary and Chart Section */}
      <div className='d-flex'>
        <div className='mx-4'>
          <Monthsummary />
        </div>
        <div className='mx-4'>
          <Chart />
        </div>
      </div>



      {/* Expenses List Section */}
      <div className='my-5' >
        <Expenses />
      </div>
      <div id='addexpense'>
        <Link to='/expense-form'> <Button onclick={handleForm} className='btn btn-lg btn-primary '>Add expense</Button></Link>
        {form && <Expenseformpage />}
      </div>

    </div>
  );
}

export default Homepage
