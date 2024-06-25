import Form from 'react-bootstrap/Form'
import './SignUp.css'
import { Header, Footer } from '../components'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="Page">
      <Header />
      <div className="signup">
        <Form className="signup-input">
          <h2>Login</h2>

          <Link to="/ProfileMentor">
            <button className="mentorlogin" id="mentor">
              Login as mentor
            </button>
          </Link>

          <div className="signup-content">
            <input type="email" placeholder="Email"></input>

            <input type="password" placeholder="Password"></input>

            <Link to="/ProfileStudent">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </Form>

        <div className="login">
          <p>New to FutureFinder?</p>

          <Link to="/SignUp">
            <button className="login">Join Now!</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
