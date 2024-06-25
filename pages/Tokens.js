import { Header } from '../components'
import './Token.css'
import { LinearScale, CategoryScale } from 'chart.js'
import chat from '../assets/mentorchat.png'
import gcoach from '../assets/groupcoach.jpg'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { Footer } from '../components'

Chart.register(LinearScale, CategoryScale)

function Tokens() {
  const labels = ['100', '200', '320', '450', '600']

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Tokens',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: ['+0', '+1', '+2', '+3', '+5'],
      },
    ],
  }

  const options = {
    scales: {
      y: {
        display: false,
        drawBorder: false,
      },
    },
  }

  return (
    <div className="token">
      <Header />
      <div className="token-title">
        <h1>Earn Anytime, Anywhere</h1>
        <h2>with your professional knowledge</h2>
        <h3>How it Works?</h3>
        <h5>1 token = RM 1</h5>
      </div>

      <div className="prof-container">
        <div className="prof-content">
          <h2>Professional Chat</h2>
          <p>Chat with students and share your professional opinion to them</p>
          <p>
            Sometimes peoples easy to get lost when choosing their university
            course and future careers
          </p>
          <p>share them the advice and bring them to the right path!</p>
          <h6>Chat 20 minutes</h6>
          <button>earn 4 tokens</button>
        </div>

        <img class="img" src={chat} width={500} height={500} />
      </div>

      <div className="coach-container">
        <img src={gcoach} width={500} height={300}></img>
        <div className="coach-content">
          <h2>Group Coaching</h2>
          <p>
            Sharing interview techniques? or ways to pick university courses?
          </p>
          <p>Share them now by offering it in your courses</p>
          <p>Group coaching can have up to 20 students in one class</p>
          <h6>for each student in one class</h6>
          <button>earn 6 tokens</button>
        </div>
      </div>

      <div className="milestone">
        <h2>Earn More with Earning Milestone</h2>
        <h5>guide more, earn more</h5>
        <div className="chart">
          <Line data={data} options={options} width={35} height={10} />
        </div>
        <div className="milestone-content">
          <p>
            For every 100 students the mentor guide, you will have additional 1
            tokens added into your milestone
          </p>
          <br />
          <p>
            For example, you have guided total of 100 students,
            then for your professional chat tokens get will increase to 5
            tokens/session. Meanwhile group coaching will increase to 7
            tokens/session
          </p>
          <br />
          <p>
            Same as today you have guided total of 320 students, then for your
            professional chat tokens get will increase to 6 tokens/session.
            Meanwhile group coaching will increase to 8 tokens/session
          </p>
        </div>

        <div className="warning">
          <p>
            if mentor receive any complaints or report
            <br />
            there will be 15 tokens deducted
          </p>
          <button>learn more penalty rules</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Tokens
