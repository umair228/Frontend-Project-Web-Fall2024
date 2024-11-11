import React from 'react'
import Layout from '../../components/layout/Layout'
import './About.css'

const About = () => {
  return (
    <Layout>
      <div className='about-box'>
        <div className='about-img'>
          <img src='https://static.vecteezy.com/system/resources/previews/007/931/696/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg' alt="img-about"/>
        </div>
        <div className='about-info'>
          <h1>About Us</h1>
          <h6>

            About Us:
            Welcome to our Resume Genie! We’re dedicated to helping you craft a standout resume effortlessly. Whether you’re starting fresh or polishing an existing profile, our user-friendly tools make creating a professional resume fast and simple. We aim to empower job seekers with customizable templates and intuitive design options that reflect their unique skills and personality. Join us on your journey to career success and make that first impression count!

          </h6>

        </div>
      </div>
    </Layout>
  )
}

export default About