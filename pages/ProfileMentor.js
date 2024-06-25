import React, { useState } from 'react'
import { Header, Footer } from '../components'
import './ProfileMentor.css'
import { AiOutlineWallet, AiOutlineBank } from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import profilePic from '../assets/profile2.png'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [activeButton, setActiveButton] = useState('My Dashboard')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const course1 = () => {
    var x = document.getElementById('course1')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }

  const course2 = () => {
    var x = document.getElementById('course2')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }

  const renderContent = () => {
    switch (activeButton) {
      case 'My Dashboard':
        return (
          <div className="profileContent">
            <div className="dashboard">
              <h1>My Dashboard</h1>
              <p>
                <strong>Name:</strong> Faizal
              </p>
              <p>
                <strong>Role:</strong> Mentor
              </p>
              <p>
                <strong>Company:</strong> INC Technology Company
              </p>
              <p>
                <strong>Expert Field:</strong> IT, Artificial Intelligence,
                Machine Learning
              </p>

              <h5>Available tokens: 20</h5>

              <Link to="/Tokens">
                <button className="tokens">Get More Tokens Now! </button>
              </Link>
            </div>
          </div>
        )
      case 'My Profile':
        return (
          <div className="profileContent">
            <div className="myprofile">
              <h1>My Profile</h1>
              <button>Change Profile Picture</button>
              <p>
                <strong>Name:</strong> Faizal
              </p>
              <p>
                <strong>Role:</strong> Mentor
              </p>
              <p>
                <strong>Company:</strong> INC Technology Company
              </p>
              <p>
                <strong>Expert Field:</strong> IT, Artificial Intelligence,
                Machine Learning
              </p>
              <p>
                <strong>Email:</strong> faizal@gmail.com
              </p>
              <p>
                <strong>Phone Number:</strong> 0123456789
              </p>
              <p>
                <strong>Date of Birth:</strong> 01-01-1980
              </p>
              <button>Change Password</button>
              <button id="delete">DELETE ACCOUNT</button>
            </div>
          </div>
        )
      case 'wallet':
        return (
          <div className="profileContent">
            <div className="wallet">
              <h1>Wallet</h1>
              <h5>No Withdrawal Method added...</h5>
              <h6>Add a new banking method +</h6>

              <AiOutlineWallet />
              <button>Ewallet</button>
              <AiOutlineBank />
              <button>Online Banking</button>
              <RiSecurePaymentFill />
              <button>FPX</button>
            </div>
          </div>
        )
      case 'My Services':
        return (
          <div className="profileContent">
            <div className="services">
              <h1>Current Offered Services</h1>

              <h4>1. Professional Chat</h4>
              <p>
                <strong>Expert Field: </strong>IT/Software Engineering
              </p>
              <h4>2. Group Coaching</h4>
              <p>
                <strong>Courses:</strong>
              </p>

              <div className="course1">
                <button onClick={course1}>
                  Get Yourself Ready in Real IT industry
                </button>
                <div id="course1">
                  <h5>descriptions:</h5>
                  <p>
                    As a university student, you're likely wondering how you can
                    prepare yourself for a career in the fast-paced and
                    ever-changing IT industry. In this talk, we'll discuss some
                    of the key skills and knowledge that are in high demand in
                    the industry, as well as strategies for building your own
                    skills and experience. We'll also explore some of the
                    challenges and opportunities that await you in the industry,
                    and how you can best position yourself to succeed. Whether
                    you're just starting out in your studies or getting ready to
                    graduate, this talk will give you valuable insights and
                    practical advice for making your mark in the exciting world
                    of IT.
                  </p>
                  <h6><strong>Length of Courses:</strong> 2 hours</h6>
                </div>
              </div>

              <div className="course2">
                <button onClick={course2}>AI Evolution</button>
                <div id="course2">
                  <h5>descriptions:</h5>
                  <p>
                    The AI Revolution is a fascinating and rapidly evolving
                    field that has the potential to transform nearly every
                    aspect of our lives. This talk is designed to introduce
                    university students to the basics of AI, including machine
                    learning, deep learning, and neural networks. We will
                    explore how AI is already being used in areas like
                    healthcare, transportation, and finance, and discuss the
                    ethical and social implications of this technology. Whether
                    you are an aspiring data scientist or simply curious about
                    the future of technology, this talk will provide you with a
                    solid foundation in the exciting field of AI.
                  </p>
                  <h6><strong>Length of Courses:</strong> 2 hours</h6>
                </div>
              </div>

              <button className='add'>Add New Courses +</button>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="Page">
      <div className="profile">
        <Header />
        <div className="profileNav">
          <img src={profilePic} id="profilepic" alt="profile"></img>
          <button
            onClick={() => handleButtonClick('My Dashboard')}
            className={activeButton === 'My Dashboard' ? 'active' : ''}
          >
            My Dashboard
          </button>
          <button
            onClick={() => handleButtonClick('My Profile')}
            className={activeButton === 'My Profile' ? 'active' : ''}
          >
            My Profile
          </button>
          <button
            onClick={() => handleButtonClick('wallet')}
            className={activeButton === 'wallet' ? 'active' : ''}
          >
            Wallet
          </button>
          <button
            onClick={() => handleButtonClick('My Services')}
            className={activeButton === 'My Services' ? 'active' : ''}
          >
            My Services
          </button>
        </div>
        <div className="profileContent">{renderContent()}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
