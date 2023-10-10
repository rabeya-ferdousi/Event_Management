import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import {SiGmail} from "react-icons/Si"

const LogIn = () => {

    const {user,signInWithGmail,signIn,} = useContext(AuthContext);
   // const [loginStatus,setLoginStatus] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const formData = new FormData(e.currentTarget)

        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email,password);

        signIn(email,password)
        .then(result=>
            setLoginStatus(true),
            swal({
                title: "Successfully Logged In",
                icon: "success",
                dangerMode: false,
              })
        )
        .catch(error => 
            swal({
            title: "Error",
            icon: "warning",
            dangerMode: true,
          }))
         

    }
    const handleGoogleLogin = e => {
        e.preventDefault()
        signInWithGmail()
        .then(result=>
            swal({
                title: "Successfully Registered",
                icon: "success",
                dangerMode: false,
              }))
        .catch(error => 
            swal({
            title: error.message,
            icon: "warning",
            dangerMode: true,
          }))
    }
    return (
        <div>
           < h1 className="text-3xl font-bold text-center mt-2">Login now!</h1>
            <div className="hero min-h-screen">  
            <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl bg-base-100">
             
                <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary" >Login</button>
                    </div>
                    <p>Log-In with <a onSubmit={handleGoogleLogin} className="btn bg-white">Gmail<SiGmail></SiGmail></a></p>
                </form>
                <p className='text-center'>Don't Have any account?<Link to="/register" className='btn '>Register</Link></p>
                
                </div>
            </div>
            </div>


        </div>
    );
};

export default LogIn;