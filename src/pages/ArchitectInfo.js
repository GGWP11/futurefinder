import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header, PageTitle, Footer, GoBack } from '../components'
import { MdWork } from 'react-icons/md'
import { TfiWrite } from 'react-icons/tfi'
import { BsFillBuildingFill } from 'react-icons/bs'


import architect from '../assets/architect.jpg'

import Theme from '../Theme.js';
import './pages.css'
import './AccountantInfo.css'

const ArchitectInfo = () => {
  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="Architect" />
        <Container>
          <Row>
            <Col xs={1} className="icon">
              <MdWork />
            </Col>
            <Col>
              <p className='title'>What Architects Do</p>
            </Col>
          </Row>
          <Row className='account-img'>
            <img src={architect} alt="architect image"/>
          </Row>
          <Row className='text-body'>
            <p>Architects plan and design houses, factories, office buildings, and other structures.</p>
          </Row>
          <Row>
          <Col xs={1} className="icon">
              <TfiWrite />
            </Col>
            <Col>
              <p className='title'>Duties of Architects</p>
            </Col>
          </Row>
          <Row className='text-body'>
            <p>Architects typically do the following:</p>
            <ul>
              <li>Meet with clients to determine objectives and requirements for structures</li>
              <li>Give preliminary estimates on cost and construction time</li>
              <li>Prepare structure specifications</li>
              <li>Direct workers who prepare drawings and documents</li>
              <li>Prepare scaled drawings, either with computer software or by hand</li>
              <li>Prepare contract documents for building contractors</li>
              <li>Manage construction contracts</li>
              <li>Visit worksites to ensure that construction adheres to architectural plans</li>
              <li>Seek new work by marketing and giving presentations</li>
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
            <p className='text-body'>Architects spend much of their time in offices, where they meet with clients, develop reports and drawings, and work with other architects and engineers. They also visit construction sites to ensure clients' objectives are met and to review the progress of projects. Some architects work from home offices.</p>
          </Row>
          <GoBack route="/careerInfo"/>
        </Container>
      <Footer />
      </div>
    </Theme>
  )
}

export default ArchitectInfo
