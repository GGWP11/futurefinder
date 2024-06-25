import { Header, Footer } from '../components'
import './Others.css'
import peoples from '../assets/peoples.png'
import { Link } from 'react-router-dom'

function Others() {
  return (
    <div className="Page">
      <div className="others">
        <Header />
        <div className="othersbutton">
          <Link to="/interviewWritingPage">
            <button>Interview Techniques</button>
          </Link>
          <Link to="/ResumePage">
            <button>Resume Writing</button>
          </Link>
          <Link to="/Workshop">
            <button>Upcoming Workshop</button>
          </Link>
          <Link to="/CareerInfo">
            <button>Career Path Prior Information</button>
          </Link>
        </div>
        <img src={peoples}></img>
      </div>
      <Footer />
    </div>
  )
}

export default Others
