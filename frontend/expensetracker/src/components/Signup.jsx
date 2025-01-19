import Input from './Input'
import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom';
import Alertbox from './Alertbox'

const url = process.env.REACT_APP_URL_LINK;
const Signup = () => {
  const { register, handleSubmit, reset } = useForm()
  const [loading, setloading] = useState(false)
  const [Message, setMessage] = useState()
  const [Status, setStatus] = useState()
  const navigate = useNavigate()
  const signup = async (data) => {
    setloading(true)
    const headers = {
      'Content-Type': 'application/json' // Replace with your token
    };
    try {
      const response = await axios.post(`${url}/signup`, data, { headers })
      if (response.status === 201) {
        console.log(response)
        reset()
        setStatus('success')
        setMessage('User created successfully')
        setloading(false)
        setTimeout(() => {
          navigate('/expense_tracker/login')
        }, 2000);

      }
    } catch (error) {
      setStatus("danger")
      setMessage(error.response.data.error)
      setTimeout(() => {
        setloading(false)
      }, 4000);
      setloading(true)
    } 
  }

  return (<>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      {!loading && <Alertbox message={Message} status={Status} />}
      <div className="  card shadow-lg p-4 rounded w-100" id="signupcard" style={{ maxWidth: '500px' }}>
        <h1 className="text-center mb-4 text-white">Sign up</h1>
        <form onSubmit={handleSubmit(signup)}>
          {/* for username */}
          <div className="form-group mb-3">
            <Input
              id="input"
              className="form-control rounded-pill p-3 border-0 shadow-sm"
              placeholder="Username"
              name="name"
              {...register("name")}
            />
            {/* {errors.name && <p role="alert" className=" mx-4 text-danger">Username is required</p>} */}
          </div>

          {/* for email */}
          <div className="form-group mb-3">
            <Input
              id="input"
              className="form-control rounded-pill p-3 border-0 shadow-sm"
              placeholder="Email"
              name="email"
              {...register("email")}
            />
            {/* {errors.email && <p role="alert" className=" mx-4 text-danger">Email is required</p>} */}
          </div>

          {/* for password */}
          <div className="form-group mb-3">
            <Input
              id="input"
              className="form-control rounded-pill p-3 border-0 shadow-sm"
              placeholder="Password"
              name="password"
              type="password"
              {...register("password")}
            />
            {/* {errors.password && <p role="alert" className=" mx-4 text-danger">Password is required</p>} */}
          </div>

          <div className="text-center">
            <Button
              type="submit"
              className="btn btn-dark btn-lg px-4"
              style={{ width: "200px" }} // Button width
            >
              Sign Up
            </Button>
            <p style={{ color: 'white' }}>Already hav an account.... <Link to='/expense_tracker/login'>Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>

  </>
  );
}

export default Signup
