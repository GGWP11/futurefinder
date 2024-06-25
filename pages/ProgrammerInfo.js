import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header, PageTitle, Footer, GoBack } from '../components'
import { MdWork } from 'react-icons/md'
import { TfiWrite } from 'react-icons/tfi'
import { BsFillBuildingFill } from 'react-icons/bs'


import technology from '../assets/programmer.jpg'

import Theme from '../Theme.js';
import './pages.css'
import './AccountantInfo.css'

const ProgrammerInfo = () => {
  return (
    <Theme>
      <div className="Page">
        <Header />
        <PageTitle title="Computer Programmer" />
        <Container>
          <Row>
            <Col xs={1} className="icon">
              <MdWork />
            </Col>
            <Col>
              <p className='title'>What Computer Programmers Do</p>
            </Col>
          </Row>
          <Row className='account-img'>
            <img src={technology} alt="programmer image"/>
          </Row>
          <Row className='text-body'>
            <p>Computer programmers write and test code that allows computer applications and software programs to function properly. They turn the program designs created by software developers and engineers into instructions that a computer can follow. In addition, programmers test newly created applications and programs to ensure that they produce the expected results. If they do not work correctly, computer programmers check the code for mistakes and fix them.</p>
          </Row>
          <Row>
          <Col xs={1} className="icon">
              <TfiWrite />
            </Col>
            <Col>
              <p className='title'>Duties of Computer Programmers</p>
            </Col>
          </Row>
          <Row className='text-body'>
            <p>Computer programmers typically do the following:</p>
            <ul>
              <li>Write programs in a variety of computer languages, such as C++ and Java</li>
              <li>Update and expand existing programs</li>
              <li>Test programs for errors and fix the faulty lines of computer code</li>
              <li>Create and test code in an integrated development environment (IDE)</li>
              <li>Use code libraries, which are collections of independent lines of code, to simplify the writing</li>
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
            <p className='text-body'>Programmers usually work in office settings, which may be in their homes.</p>
          </Row>
          <GoBack route="/careerInfo"/>
        </Container>
      <Footer />
      </div>
    </Theme>
  )
}

export default ProgrammerInfo
