import React from 'react'
import Input from './Input'
import { login as authLogin } from '../store/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from './Button'
const url=process.env.REACT_APP_URL_LINK;
const Login = () => {
    const { register,handleSubmit,reset } = useForm()
    const [loading, setloading] = useState(false)
    const dispatch=useDispatch();
    // const navigate=useNavigate()
    const login=async(data)=>{
        try {
            setloading(true)
            const headers={
                'Content-Type': 'application/json'
            };
            const response= await axios.post(`${url}/login`,data,{headers})
            if(response.status===200){
                const token=response.data.bearer
                console.log(token)
                localStorage.setItem('bearerToken',token)
                reset()
                const userHeaders={
                    'bearer':localStorage.getItem('bearerToken')
                }
                const user=await axios.get(`${url}/user`,{headers:userHeaders})
                if(user){
                    console.log(user)
                   dispatch(authLogin(user.data)) 
                }
            }else if(response.status===400){
                alert('Wrong credentials')
            }else{
                console.log("Bad request")
            }
        } catch (error) {
            console.log(error.data);
        }finally{
            setloading(false)
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4 rounded w-100" id="signincard"style={{ maxWidth: '500px' }}>
                <h1 className="text-center mb-4">Sign in</h1>
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
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
