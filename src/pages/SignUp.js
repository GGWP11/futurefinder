import Form from 'react-bootstrap/Form'
import './SignUp.css'
import { Header, Footer } from '../components'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='Page'>
      <Header />
    <div className="signup">
      <Form className="signup-input">
        <h2>Sign Up</h2>

        <div className="signup-content">
          <input type="username" placeholder="Username"></input>

          <input type="password" placeholder="Email"></input>

          <label for="role">
            I'm a
            <select name="role" id="role">
              <option value="student">student</option>
              <option value="professional">professional</option>
            </select>
          </label>

          <input type="password" placeholder="Email"></input>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </Form>

      <div className="login">
        <p>Already have account?</p>

        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default SignUp
