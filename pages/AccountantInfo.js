import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header, PageTitle, Footer, GoBack } from '../components'
import { MdWork } from 'react-icons/md'
import { TfiWrite } from 'react-icons/tfi'
import { BsFillBuildingFill } from 'react-icons/bs'


import accounting1 from '../assets/accounting1_withoutrad.png'

import Theme from '../Theme.js';
import './pages.css'
import './AccountantInfo.css'

const AccountantInfo = () => {
  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="Accountant" />
        <Container>
          <Row>
            <Col xs={1} className="icon">
              <MdWork />
            </Col>
            <Col>
              <p className='title'>What Accountants and Auditors Do</p>
            </Col>
          </Row>
          <Row className='account-img'>
            <img src={accounting1} alt="accounting image"/>
          </Row>
          <Row className='text-body'>
            <p>Accountants and auditors prepare and examine financial records. They ensure that financial records are accurate and that taxes are paid properly and on time. Accountants and auditors assess financial operations and work to help ensure that organizations run efficiently.</p>
          </Row>
          <Row>
          <Col xs={1} className="icon">
              <TfiWrite />
            </Col>
            <Col>
              <p className='title'>Duties of Accountants and Auditors</p>
            </Col>
          </Row>
          <Row className='text-body'>
            <p>Accountants and auditors typically do the following:</p>
            <ul>
              <li>Examine financial statements to ensure that they are accurate and comply with laws and regulations</li>
              <li>Compute taxes owed, prepare tax returns, and ensure that taxes are paid properly and on time</li>
              <li>Inspect account books and accounting systems for efficiency and use of accepted accounting procedures</li>
              <li>Organize and maintain financial records</li>
              <li>Assess financial operations and make best-practices recommendations to management</li>
              <li>Suggest ways to reduce costs, enhance revenues, and improve profits</li>
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
            <p className='text-body'>Most accountants and auditors work in offices, but some work from home. Although they complete much of their work alone, they sometimes work in teams with other accountants and auditors. Accountants and auditors may travel to their clients' places of business.</p>
          </Row>
          <GoBack route="/careerInfo"/>
        </Container>
      <Footer />
      </div>
    </Theme>
  )
}

export default AccountantInfo
