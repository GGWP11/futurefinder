import React from 'react'
import './plan.css'
import { Header } from '../components'
import { BiCheck, BiHeart } from 'react-icons/bi'

function Plan() {
  return (
    <div className="plan">
      <Header />

      <h3>More Tools</h3>
      <p>to build your future.</p>

      <div className="column">
        <div className="card plan-card">
          <h2>Basic Plan</h2>
          <p>
            <BiCheck /> Resume Writing Techniques <br />
            <BiCheck /> Interview Techniques <br />
            <BiCheck /> Career Path Analysis <br />
            <BiCheck /> Online / Physical Workshop <br />
            <BiCheck /> Career Path Information <br />
            <h5>FREE</h5>
          </p>
        </div>

        <div className="card plan-card">
          <h2>Budget Plan</h2>
          <p>
            <BiHeart /> Everything in basic plan <br />
            <BiCheck /> 1 sessions of AI based Mock Interview <br />
            <strong>OR</strong> <br />
            <BiCheck /> 1 sessions of Chat with Industrial Professional <br />
            <h5>RM 6.99</h5>
            <h6>+5 points</h6>
            <button>Subscribe Now!</button>
          </p>
        </div>

        <div className="card plan-card">
          <h2>Premium Plan</h2>
          <p>
            <BiHeart /> Everything in basic plan <br />
            <BiCheck /> AI based Mock Interview <br />
            <BiCheck /> Chat with Industrial Professional <br />
            <BiCheck /> Group Coaching <br />
            <h5>RM 45.99</h5>
            <h6>+30 points</h6>
            <button>Subscribe Now!</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Plan
