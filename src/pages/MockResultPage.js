import React from 'react'

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Header, PageTitle, MockResultFooter, Footer} from '../components';

import Theme from '../Theme.js';
import './pages.css';
import './MockResultPage.css'

import problemsolving from '../assets/clip-problem-solving2.png';

const MockResultPage = () => {
  return (
    <div className='Page'>
      <Header />
      <PageTitle title="Mock Interview Result" />
      <Theme>
        <Container>
            <Row>
                <Col md={6}>
                    <img src={problemsolving} alt="problemsolving"/>
                </Col>
                <Col md={6}>
                <h3 className='result'>87% Overall Performance</h3>
                <p className='title'>Ways to improve overall performance:</p>
                <ul>
                    <li className='suggestion'>Practice good nonverbal communication</li>
                    <li className='suggestion'>Ask questions</li>
                    <li className='suggestion'>Be confident</li>
                </ul>
                </Col>
            </Row>
        </Container>
        <MockResultFooter totalPages={3} currentPage={0} />
        
      <Footer />
      </Theme>
      </div>
  )
}

export default MockResultPage
