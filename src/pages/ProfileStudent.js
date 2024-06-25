import React, { useState } from 'react'
import { Header, Footer} from '../components'
import './profilestudent.css'
import {
  AiOutlineCreditCard,
  AiOutlineWallet,
  AiOutlineBank,
} from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { GiKidneys } from 'react-icons/gi'
import profilePic from '../assets/profile1.png'
import { Link } from 'react-router-dom'
import { PointsGuide } from './PointsGuide'

const Profile = () => {
  const [activeButton, setActiveButton] = useState('My Dashboard')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const renderContent = () => {
    switch (activeButton) {
      case 'My Dashboard':
        return (
          <div className="profileContent">
            <div className="dashboard">
              <h1>My Dashboard</h1>
              <p>
                <strong>Name:</strong> Jane
              </p>
              <p>
                <strong>Role:</strong> Student
              </p>
              <p>
                <strong>University:</strong> Multimedia University
              </p>
              <p>
                <strong>Interested Field:</strong> Engineering
              </p>

              <h5>Available points: 230</h5>

              <Link to="/PointsGuide">
                <button className="pointsguide">Get More Points Now! </button>
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
                <strong>Name:</strong> Jane
              </p>
              <p>
                <strong>Role:</strong> Student
              </p>
              <p>
                <strong>University:</strong> Multimedia University
              </p>
              <p>
                <strong>Interested Field:</strong> Engineering
              </p>
              <p>
                <strong>Email:</strong> Jane
              </p>
              <p>
                <strong>Phone Number:</strong> Student
              </p>
              <p>
                <strong>Date of Birth:</strong> Multimedia University
              </p>
              <button>Change Password</button>
              <button id="delete">DELETE ACCOUNT</button>
            </div>
          </div>
        )
      case 'Payments':
        return (
          <div className="profileContent">
            <div className="payments">
              <h1>Payments</h1>
              <p>No Payments Method added...</p>
              <p>Add a new payment method +</p>
              <AiOutlineCreditCard />
              <button>Credit Card</button>
              <AiOutlineWallet />
              <button>Ewallet</button>
              <AiOutlineBank />
              <button>Online Banking</button>
              <RiSecurePaymentFill />
              <button>FPX</button>
            </div>
          </div>
        )
      case 'Current Plan':
        return (
          <div className="profileContent">
            <h1>Current Plan</h1>

            <p>Basic Plan</p>

            <Link to="/Plan">
              <button>Buy Plan</button>
            </Link>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='Page'>
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
          onClick={() => handleButtonClick('Payments')}
          className={activeButton === 'Payments' ? 'active' : ''}
        >
          Payments
        </button>
        <button
          onClick={() => handleButtonClick('Current Plan')}
          className={activeButton === 'Current Plan' ? 'active' : ''}
        >
          Current Plan
        </button>
      </div>
      <div className="profileContent">{renderContent()}</div>
    </div>
    <Footer />
    </div>
  )
}

export default Profile
