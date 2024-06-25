import React, { useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'

import accounting from '../assets/accounting-systems1.png'
import accounting1 from '../assets/accounting1.png'
import architect from '../assets/architect.jpg'
import technology from '../assets/programmer.jpg'

import './pages.css'
import Theme from '../Theme.js';
import './CareerInfo.css'

const CareerInfo = () => {
    const [selectedCategory, setSelectedCategory ] = useState('');

    const handleSelect = (eventKey) => {
        setSelectedCategory(eventKey);
      }

  return (
    <Theme>
        <div className='Page'>
      <Header />
      <PageTitle title="Career Information"/>
      <Container>
      <Row>
        <Col className='careerinfo-h3'>
            <h3>Pick an industry</h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='filter'>
        Filter by Industry
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="">All Industry</Dropdown.Item>
        <Dropdown.Item eventKey="Acc">Accounting</Dropdown.Item>
        <Dropdown.Item eventKey="Tech">Science & Technology</Dropdown.Item>
        <Dropdown.Item eventKey="Construct">Construction</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>
        <Row>
             <Col xs={6} sm={6} md={8} lg={10} className='careerbox'>
                <img className='career-img' src={accounting1} alt="accounting image" width="432px" height="301px"/>
                <Link to="/accountantInfo">
                    <button className='careerinfo-btn'>Accountant</button>
                </Link>
            </Col>
            <Col xs={6} sm={6} md={8} lg={10} className='careerbox'>
                <img className='career-img' src={accounting} alt="accounting image" width="432px" height="301px"/>
                <Link to='/actuaries'>
                <button className='careerinfo-btn'>Actuary</button>
                </Link>
            </Col>
            <Col xs={6} sm={6} md={8} lg={10} className='careerbox'>
                <img className='career-img' src={architect} alt="architect image" width="432px" height="301px"/>
                <Link to='/architectInfo'>
                <button className='careerinfo-btn'>Architect</button>
                </Link>
            </Col>
            <Col xs={6} sm={6} md={8} lg={10} className='careerbox'>
                <img className='career-img' src={technology} alt="technology image" width="432px" height="301px"/>
                <Link to='/programmerInfo'>
                <button className='careerinfo-btn'>Programmer</button>
                </Link>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
    </Theme>
  )
}

export default CareerInfo
