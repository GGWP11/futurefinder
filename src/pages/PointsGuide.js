import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { GiToken } from 'react-icons/gi'
import { MdGeneratingTokens } from 'react-icons/md'

import companyreview from '../assets/companyreview.png'
import budgetplan from '../assets/budgetplan.png'
import premiumplan from '../assets/premiumplan.png'

import Theme from '../Theme.js'
import './pages.css'
import './PointsGuide.css'

const PointsGuide = () => {
  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="Point Accumulation" />
        <Container>
          <p className="curpoints">
            <strong>Current Points:</strong> 230
          </p>
          <div className='firstpoints'>
            <br />
            <p className="points-heading">80 points</p>
            <button> 1 month Premium Plan</button>
          </div>
          <div className='secondpoints'>
            <br />
            <p className="points-heading">200 points</p>
            <button> 3 months Premium Plan</button>
          </div>
          <Row>
            <Col>
              <GiToken />
            </Col>
            <Col xs={11}>
              <p className="points-title">What is Point?</p>
            </Col>
          </Row>
          <Row>
            <p className="points-p">
              POINT is a LIFETIME Points Based Rewards System that offers you
              PREMIUM PLAN FOR FREE!
            </p>
          </Row>
          <Row>
            <Col>
              <MdGeneratingTokens />
            </Col>
            <Col xs={11}>
              <p className="points-title">Where can I gain Point?</p>
            </Col>
          </Row>
          <Row>
            <p className="points-p">
              You can gain points with several ways including:
            </p>
          </Row>
          <Row>
            <ul className="points-p">
              <li>
                Leave a COMPANY REVIEW as an employee in our employers page to
                gain 2 POINTS!
              </li>
              <img
                className="points-img"
                src={companyreview}
                alt="Company Review Page"
              />
              <li>
                Purchasing our BUDGET PLAN which cost only RM6.99 with exclusive
                features to gain 5 POINTS!
              </li>
              <img
                className="points-img"
                src={budgetplan}
                alt="Budget Plan Subscription"
              />
              <li>
                Subscribe to our PREMIUM PLAN with only RM45.99 to unlock all
                available features and gain 30 POINTS!
              </li>
              <img
                className="points-img"
                src={premiumplan}
                alt="Premium Plan Subscription"
              />
            </ul>
          </Row>
        </Container>
        <Footer />
      </div>
    </Theme>
  )
}

export default PointsGuide
