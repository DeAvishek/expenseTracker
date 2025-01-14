import Input from './Input'
import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

const url=process.env.REACT_APP_URL_LINK;
const Signup = () => {
    const {register,handleSubmit,reset}=useForm()
    const [loading, setloading] = useState(false)
    const navigate= useNavigate()
    const signup=async(data)=>{
        setloading(true)
        const headers = {
          'Content-Type': 'application/json' // Replace with your token
        };
      try {
        const response= await axios.post(`${url}/signup`,data,{headers})
        if(response.status===201){
          console.log(response)
          reset()
          navigate('/login')

        }else if(response.status===409){
          console.log("User with this email exits")
        }else{
          console.log("bad request")
        }  
    } catch (error) {
      console.log(error) 
    }finally{
      setloading(false)
    }
    }
    
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
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
        </div>
      </form>
    </div>
  </div>
);
}

export default Signup
