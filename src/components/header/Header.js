import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './Header.css'
import {toast} from 'react-hot-toast'

const Header = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  const navigate = useNavigate()
  const handleLogOut=()=>{
    localStorage.removeItem('auth')
    toast.success('Log Out Success',{duration:2000})
    navigate('/')
  }
  return (
    <div className='header-nav'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand">Resume Genie</NavLink>
  
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      { auth?<> <li className="nav-item">
          <NavLink to='/' className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/craft' className="nav-link active" aria-current="page" >Generate Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/user-profile' className="nav-link active" aria-current="page" >User Profile</NavLink>
        </li>
        <button onClick={handleLogOut} className='navbar-btn'>Log out</button>
         </>:<>
        <NavLink to='/' className="nav-link active" aria-current="page" >Home</NavLink>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" >Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link" >Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Log In</NavLink>
        </li>
        </>}
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header