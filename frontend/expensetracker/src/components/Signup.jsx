import Input from './Input'
import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from './Button'

const url=process.env.REACT_APP_URL_LINK;
const Signup = () => {
    const {register,handleSubmit,reset}=useForm()
    const [loading, setloading] = useState(false)
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
      <h1 className="text-center mb-4">Sign up</h1>
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

// import React from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import Input from './Input'; // Assuming you have a custom Input component

// const Signup = () => {
//   // Initialize react-hook-form
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // Signup function to handle form submission
//   const signup = async (data) => {
//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     try {
//       // Sending POST request with form data
//       const response = await axios.post('http://localhost:6000/signup', data, { headers });
      
//       // Check if the response is successful
//       if (response.status === 200) {
//         console.log('User signed up:', response);
//       } else {
//         console.log('Bad request:', response);
//       }
//     } catch (error) {
//       // Log any error that occurs during the request
//       console.log('Error during signup:', error);
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center min-vh-100">
//       <div className="card shadow-lg p-4 rounded w-100" style={{ maxWidth: '500px' }}>
//         <h1 className="text-center mb-4">Sign up</h1>

//         {/* Form submission handler */}
//         <form onSubmit={handleSubmit(signup)}>
          
//           {/* Username input */}
//           <div className="form-group mb-3">
//             <Input
//               id="input-username"
//               className="form-control rounded-pill p-3 border-0 shadow-sm"
//               placeholder="Username"
//               name="name"
//               {...register('name', { required: 'Username is required' })}
//             />
//             {errors.name && <p role="alert" className="text-danger">{errors.name.message}</p>}
//           </div>

//           {/* Email input */}
//           <div className="form-group mb-3">
//             <Input
//               id="input-email"
//               className="form-control rounded-pill p-3 border-0 shadow-sm"
//               placeholder="Email"
//               name="email"
//               type="email"
//               {...register('email', { required: 'Email is required' })}
//             />
//             {errors.email && <p role="alert" className="text-danger">{errors.email.message}</p>}
//           </div>

//           {/* Password input */}
//           <div className="form-group mb-3">
//             <Input
//               id="input-password"
//               className="form-control rounded-pill p-3 border-0 shadow-sm"
//               placeholder="Password"
//               name="password"
//               type="password"
//               {...register('password', { required: 'Password is required' })}
//             />
//             {errors.password && <p role="alert" className="text-danger">{errors.password.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button type="submit" className="btn btn-primary btn-sm my-3">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
