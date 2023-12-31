import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar";


import { FaGoogle } from "react-icons/fa";



const Login = () => {

  const { signIn, logOut, user, setLoggedIn,googleLogin, loading } = useContext(AuthContext);




  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;


    signIn(email, password)
      .then(result => {
        toast.success('Login Successful!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setLoggedIn(true)
      }
      )
      .catch(error =>
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )



  }

  const handleGoogleLogin = () => {
    googleLogin().then(result => {
      toast.success('Login Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).catch();
  }

  return (
    <>

      <div>

        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
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
                <div>New Here? <Link to='/register'>Register</Link></div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>

                  <ToastContainer />
                </div>
              </form>
            </div>

            <div className="my-10">
               <button onClick={handleGoogleLogin} className="bg-red-500 flex items-center gap-3 rounded-xl p-3 text-white font-semibold"><FaGoogle></FaGoogle>Continue with Google</button>
            </div>
          </div>

          
        </div>



      </div>


    </>

  );
};

export default Login;