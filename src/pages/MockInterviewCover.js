import React from 'react'
import { Header, PageTitle, Footer } from '../components'
import Container from 'react-bootstrap/Container'

import './MockInterviewCover.css'
import './pages.css'

import puzzle from '../assets/52782.png'
import { Link } from 'react-router-dom'

const MockInterviewCover = () => {
  return (
    <div className="Page">
      <Header />
      <PageTitle title="Mock Interview" />
      <Container>
        <div className="mockinterview-how">
          <p>How it works?</p>
          <div className="mockinterview-p">
            <p>
              FutureFinder’s mock Interview is an AI based program, which all
              the marks are given by AI based on your facial expression and your
              answers.
            </p>
            <br />
            <p>
              The conversational exercise usually resembles a real interview as
              closely as possible, for the purpose of providing experience for a
              candidate.
            </p>
          </div>
        </div>

        <div className="select">
          <p>Type of interview:</p>

          <select>
            <option>General Interview</option>
            <option>Civil Engineering</option>
            <option>Data Communication and Networking</option>
            <option>Medical Science</option>
            <option>Teacher</option>
            <option>Nutritionist</option>
            <option>Software Engineering</option>
          </select>
        </div>

        <Link to="/mockPage" style={{ textDecoration: 'none' }}>
          <button className="startbtn">Start Now</button>
        </Link>
        <img src={puzzle} alt="puzzle" />
      </Container>
      <Footer />
    </div>
  )
}

export default MockInterviewCover
