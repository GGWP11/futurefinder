import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header, PageTitle, Footer, GoBack } from '../components'
import { MdWork } from 'react-icons/md'
import { TfiWrite } from 'react-icons/tfi'
import { BsFillBuildingFill } from 'react-icons/bs'


import accounting from '../assets/accounting-systems1.png'

import Theme from '../Theme.js';
import './pages.css'
import './AccountantInfo.css'

const Actuaries = () => {
  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="Actuary" />
        <Container>
          <Row>
            <Col xs={1} className="icon">
              <MdWork />
            </Col>
            <Col>
              <p className='title'>What Actuary Do</p>
            </Col>
          </Row>
          <Row className='account-img'>
            <img src={accounting} alt="actuary image"/>
          </Row>
          <Row className='text-body'>
            <p>Actuaries analyze the financial costs of risk and uncertainty. They use mathematics, statistics, and financial theory to assess the risk of potential events, and they help businesses and clients develop policies that minimize the cost of that risk. Actuaries' work is essential to the insurance industry.</p>
          </Row>
          <Row>
          <Col xs={1} className="icon">
              <TfiWrite />
            </Col>
            <Col>
              <p className='title'>Duties of Actuaries</p>
            </Col>
          </Row>
          <Row className='text-body'>
            <p>Actuaries typically do the following:</p>
            <ul>
              <li>Compile statistical data and other information for further analysis</li>
              <li>Estimate the probability and likely economic cost of an event such as death, sickness, an accident, or a natural disaster</li>
              <li>Design, test, and administer insurance policies, investments, pension plans, and other business strategies to minimize risk and maximize profitability</li>
              <li>Produce charts, tables, and reports that explain calculations and proposals</li>
              <li>Explain their findings and proposals to company executives, government officials, shareholders, and clients</li>
            </ul>
          </Row>
          <Row>
          <Col xs={1} className="icon">
              <BsFillBuildingFill />
            </Col>
            <Col>
              <p className='title'>Working Environment</p>
            </Col>
          </Row>
          <Row>
            <p className='text-body'>Actuaries typically work on teams that often include managers and professionals in other fields, such as accounting, underwriting, and finance. Although actuaries usually work in an office setting, those who work for consulting firms may need to travel to meet with clients.</p>
          </Row>
          <GoBack route="/careerInfo"/>
        </Container>
      <Footer />
      </div>
    </Theme>
  )
}

export default Actuaries
