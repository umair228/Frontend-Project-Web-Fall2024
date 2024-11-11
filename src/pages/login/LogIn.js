import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate,Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import './LogIn.css'
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Form Submit Function
    const handleSubmit = (e) => {
        e.preventDefault();

        // Hardcoded credentials
        const staticEmail = "test@gmail.com";
        const staticPassword = "test1234";

        if (email === staticEmail && password === staticPassword) {
            // Simulate successful login
            console.log("User successfully logged in");
            localStorage.setItem('auth', JSON.stringify({ email: staticEmail }));
            toast.success('User Successfully Logged In', { duration: 2000 });
            navigate('/craft');
        } else {
            // Simulate login error
            console.log("Error in Log In");
            toast.error("Error in Log In");
        }
    };
  return (
 <Layout>
    <div className='login'>
      <div className="login-text">
           <h1>Log In To Resume Genie</h1>
        </div>
        <form onSubmit={handleSubmit} action='/submit' method='POST'>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            </div>

            <button type="submit" className="btn btn-primary" >Log In</button>
            <Link to="/signup">Already have an account ? Sign Up</Link>
            </form>
            </div>
            
</Layout>
  )
}

export default LogIn