import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import {SiGmail} from "react-icons/Si"
const Register = () => {

    const {createUser,signInWithGmail}= useContext(AuthContext)
    const [regError,setRegError] = useState('')
    const [success,setSuccess] = useState('')

    const handleReg = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const formData = new FormData(e.currentTarget)

        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')
       // console.log(name,email,password,confirmPassword);
       setRegError('')
       setSuccess('')
        
        createUser(email,password)
        .then(result=>
            setSuccess(ok),
            swal({
                title: "Successfully Registered",
                icon: "success",
                dangerMode: false,
              }))
        .catch(error => 
            setRegError(error.message),
            swal({
            title: error.message.substring(9),
            icon: "warning",
            dangerMode: true,
          }))
    }

    const handleGoogleReg = e => {
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
            title: error.message.substring(9),
            icon: "warning",
            dangerMode: true,
          }))
    }

    return (
        <div>
           <h1 className="text-4xl font-bold text-center p-3">Register now!</h1>
            <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="card flex-shrink-0 w-[900px] max-w-sm shadow-2xl bg-base-100">
             
                <form className="card-body" onSubmit={handleReg}>
                <div className="form-control ">
                  <label className="label">
                     <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary" >Register</button>
                    </div>
                    <p>Register with <a onClick={handleGoogleReg} className="btn bg-white">Gmail<SiGmail></SiGmail></a></p>
                </form>
                <p className='text-center'>Already have an account?<Link to="/login" className=' btn btn-ghost'>Login</Link></p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Register;