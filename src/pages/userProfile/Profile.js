import React from 'react'
import './Profile.css'
import Layout from '../../components/layout/Layout'
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <Layout>
        <div className='user-profile'>
          <div className='user-box'>
              <h1>Your Profile <span>👨🏼</span></h1>
              <p><span>Your ID: </span>uid-1238213823123</p>
              <p><span>Your Name: </span>Test User</p>
              <p><span>Your Email: </span>test@gmail.com</p>
              <p><span>Your Contact: </span>03027231731</p>
              <div>
            <Link to={`/edit-profile/`}>Edit Profile</Link>
            </div>
          </div>
          
        </div>
    </Layout>
  )
}

export default Profile