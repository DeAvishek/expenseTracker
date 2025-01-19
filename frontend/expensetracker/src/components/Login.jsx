import React from 'react'
import Input from './Input'
import { login as authLogin } from '../store/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from './Button'
import Alertbox from './Alertbox'
import { Link } from 'react-router-dom'
const url=process.env.REACT_APP_URL_LINK;
const Login = () => {
    const { register,handleSubmit,reset } = useForm()
    const [loading, setloading] = useState(false)
    const [Message, setMessage] = useState(null)
    const [Status ,setStatus] = useState(null)

    const dispatch=useDispatch();
    const navigate=useNavigate()
    const login=async(data)=>{
        try {
            setloading(true)
            const headers={
                'Content-Type': 'application/json'
            };
            const response= await axios.post(`${url}/login`,data,{headers})
            if(response.status===200){
                const token=response.data.bearer
                // console.log(token)
                localStorage.setItem('bearerToken',token)
                reset()
                const userHeaders={
                    'bearer':localStorage.getItem('bearerToken')
                }
                const user=await axios.get(`${url}/user`,{headers:userHeaders})
                if(user){
                   console.log(user.data)
                   dispatch(authLogin(user.data))
                   
                }
                setMessage("Logged in successfully")
                setStatus("success")
                reset()
                setTimeout(() => {
                    navigate('/expense_tracker/home')
                }, 2000)
        }    
        } catch (error) {
            console.log(error.response.data)
            setStatus("danger")
            setMessage(error.response.data.error)
        }finally{
            setloading(false)
        }
    };
    return (
        <>
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4 rounded w-100" id="signincard"style={{ maxWidth: '500px' }}>
            <Alertbox  message={Message} status={Status} />
                <h1 className="text-center mb-4 text-white">Sign in</h1>
                <form onSubmit={handleSubmit(login)}>
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
                            Sign in
                        </Button>
                        <p style={{color:'white'}}>Dont have an account....<Link to='/expense_tracker/signup'>Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
